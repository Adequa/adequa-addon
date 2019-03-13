const qs = require('qs');
Adequa.qs = qs;
Adequa.process.interests = {};


const parseCategory = function (object, result = "") {
  if (Object.keys(object).length === 0) return result;
  const [category, sub_categories] = Object.entries(object)[0];

  if (result !== "") result += "_";
  result += category;

  return parseCategory(sub_categories, result);
};

const getCategory = function (domain, parameters) {
  const domainCategories = Adequa.storage.websiteParameters[domain];
  if (!domainCategories) return false;

  for (const [param, value] of Object.entries(parameters)) {
    const parametersList = domainCategories[param];
    if (!parametersList) continue;

    const categoriesList = parametersList[value];
    if (!categoriesList) continue;

    return parseCategory(categoriesList);
  }

  return false
};

const checkQueryParameters = function (url) {
  const domain = Adequa.domain(url);

  const body = url.split('?').slice(-1)[0];
  const params = qs.parse(body);

  const category = getCategory(domain, params);
  if (!category) return false;
  const websiteInterests = Adequa.storage.websiteRequests[url.split('?')[0]];
  if(!websiteInterests) return;
  Adequa.model.interest.saveOrUpdate({
    category: category,
  }, url, websiteInterests).then(id => {
    Adequa.model.actionWithInterest.save({
      action_type: websiteInterests.action_type,
      action_url: url,
      action_timestamp: Date.now(),
      interest_id: id,
      interest_category: category
    });

    Adequa.process.analytics.sendAnonymousEvent(url, "advertising", "new_action_with_interest", websiteInterests.action_type, undefined, {
      "cd5": encodeURI(id),
      "cd6": encodeURI(category),
      "dl": encodeURI(url)
    });
  });
};

const checkWebsite = function (url) {
  for (const [pattern, website] of Object.entries(Adequa.storage.websiteCategory)) {
    if (url.indexOf(pattern) !== -1) {
      Adequa.model.interest.saveOrUpdate({
        category: website.category,
      }, url, website).then(id => {
        Adequa.model.actionWithInterest.save({
          action_type: website.action_type,
          action_url: url,
          action_timestamp: Date.now(),
          interest_id: id,
          interest_category: website.category
        });
        Adequa.process.analytics.sendAnonymousEvent(url, "advertising", "new_action_with_interest", website.action_type, undefined, {
          "cd5": encodeURI(id),
          "cd6": encodeURI(website.category),
          "dl": encodeURI(url)
        });
      });
      break;
    }
  }
};

Adequa.process.interests.checkUrl = function (url) {
  checkWebsite(url);
  if (url.indexOf('?') !== -1) checkQueryParameters(url);
};

const parseRequestEntry = function (object, request, result = {}) {

  if (Object.keys(object).length === 0) return result;


  const [category, sub_categories] = Object.entries(object)[0];

  result[category] = request;

  return parseRequestEntry(sub_categories, request, result);
};

const parseRequest = function (args, request, result = {}) {
  if (!args) return request;
  if (Object.keys(args).length === 0) return request;
  for (const i in args) {
    if (Object.keys(args[i]).length > 1) {
      return parseRequest(args[i], request[i], result)
    } else {
      Object.assign(result, parseRequestEntry(args[i], request[i]));
    }
  }
  return result;
};

Adequa.process.interests.checkRequest = function (details) {
  const url = details.url;
  let request = null;
  if (details.requestBody && details.requestBody.raw && details.method === "POST") {
    request = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(details.requestBody.raw[0].bytes)));
  } else if (details.method === "GET" && url.indexOf('?') !== -1) {
    request = qs.parse(details.url.split('?').slice(-1)[0], {ignoreQueryPrefix: true});
  } else return;
  const websiteInterests = Adequa.storage.websiteRequests[details.url.split('?')[0]];
  if(!websiteInterests) return;
  const parameters = parseRequest(websiteInterests.parameters, request);

  if (!parameters) return;
  if (Object.keys(parameters).length === 0) return;
  if (Object.keys(parameters).length === 1 && parameters.label) return;

  for (const [pattern, website] of Object.entries(Adequa.storage.websiteCategory)) {
    if (url.indexOf(pattern) !== -1) {
      Adequa.model.interest.saveOrUpdate({
        category: website.category,
        parameters,
      }, url, websiteInterests).then(id => {
        Adequa.model.actionWithInterest.save({
          action_type: websiteInterests.action_type,
          action_url: url,
          action_timestamp: Date.now(),
          interest_id: id,
          interest_category: website.category
        });
        Adequa.process.analytics.sendAnonymousEvent(url, "advertising", "new_action_with_interest", websiteInterests.action_type, undefined, {
          "cd5": encodeURI(id),
          "cd6": encodeURI(website.category),
          "dl": encodeURI(url)
        });
      });
      break;
    }
  }
};

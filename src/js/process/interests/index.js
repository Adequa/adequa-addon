import Interest from 'model/interest';
import ActionWithInterest from 'model/actionWithInterest';
import Utils from 'process/utils/utils';
import Analytics from 'process/utils/analytics';
import Resources from '../../resource';

const qs = require('qs');

const parseCategory = function(object, result = '') {
  if (Object.keys(object).length === 0) return result;
  const [category, sub_categories] = Object.entries(object)[0];

  if (result !== '') result += '_';
  result += category;

  return parseCategory(sub_categories, result);
};

const getCategory = function(domain, parameters) {
  const domainCategories = Resources.websiteParameters[domain];
  if (!domainCategories) return false;

  for (const [param, value] of Object.entries(parameters)) {
    const parametersList = domainCategories[param];
    if (!parametersList) continue;

    const categoriesList = parametersList[value];
    if (!categoriesList) continue;

    return parseCategory(categoriesList);
  }

  return false;
};

const checkQueryParameters = function(url) {
  const domain = Utils.domain(url);

  const body = url.split('?').slice(-1)[0];
  const params = qs.parse(body);

  const category = getCategory(domain, params);
  if (!category) return false;
  const websiteInterests = Resources.websiteRequests[url.split('?')[0]];
  if (!websiteInterests) return false;
  Interest.saveOrUpdate(
    {
      category,
    },
    url,
    websiteInterests
  ).then(id => {
    ActionWithInterest.save({
      action_type: websiteInterests.action_type,
      action_url: url,
      action_timestamp: Date.now(),
      interest_id: id,
      interest_category: category,
    });

    Analytics.sendAnonymousEvent(url, 'advertising', 'new_action_with_interest', websiteInterests.action_type, undefined, {
      cd5: encodeURI(id),
      cd6: encodeURI(category),
      dl: encodeURI(url),
    });
  });
  return true;
};

const checkWebsite = function(url) {
  for (const [pattern, website] of Object.entries(Resources.websiteCategory)) {
    if (url.indexOf(pattern) !== -1) {
      Interest.saveOrUpdate(
        {
          category: website.category,
        },
        url,
        website
      ).then(id => {
        ActionWithInterest.save({
          action_type: website.action_type,
          action_url: url,
          action_timestamp: Date.now(),
          interest_id: id,
          interest_category: website.category,
        });
        Analytics.sendAnonymousEvent(url, 'advertising', 'new_action_with_interest', website.action_type, undefined, {
          cd5: encodeURI(id),
          cd6: encodeURI(website.category),
          dl: encodeURI(url),
        });
      });
      break;
    }
  }
};

const parseRequestEntry = function(object, request, result = {}) {
  if (Object.keys(object).length === 0) return result;

  const [category, sub_categories] = Object.entries(object)[0];

  result[category] = request;

  return parseRequestEntry(sub_categories, request, result);
};

const parseRequest = function(args, request, result = {}) {
  if (!args) return request;
  if (Object.keys(args).length === 0) return request;
  for (const i in args) {
    if (Object.keys(args[i]).length > 1) {
      return parseRequest(args[i], request[i], result);
    }
    Object.assign(result, parseRequestEntry(args[i], request[i]));
  }
  return result;
};

const Interests = {
  checkUrl(url) {
    checkWebsite(url);
    if (url.indexOf('?') !== -1) checkQueryParameters(url);
  },
  checkRequest(details) {
    const { url } = details;
    let request = null;
    if (details.requestBody && details.requestBody.raw && details.method === 'POST') {
      request = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(details.requestBody.raw[0].bytes)));
    } else if (details.method === 'GET' && url.indexOf('?') !== -1) {
      request = qs.parse(details.url.split('?').slice(-1)[0], { ignoreQueryPrefix: true });
    } else return;
    const websiteInterests = Resources.websiteRequests[details.url.split('?')[0]];
    if (!websiteInterests) return;
    const parameters = parseRequest(websiteInterests.parameters, request);

    if (!parameters) return;
    if (Object.keys(parameters).length === 0) return;
    if (Object.keys(parameters).length === 1 && parameters.label) return;

    for (const [pattern, website] of Object.entries(Resources.websiteCategory)) {
      if (url.indexOf(pattern) !== -1) {
        Interest.saveOrUpdate(
          {
            category: website.category,
            parameters,
          },
          url,
          websiteInterests
        ).then(id => {
          ActionWithInterest.save({
            action_type: websiteInterests.action_type,
            action_url: url,
            action_timestamp: Date.now(),
            interest_id: id,
            interest_category: website.category,
          });
          Analytics.sendAnonymousEvent(url, 'advertising', 'new_action_with_interest', websiteInterests.action_type, undefined, {
            cd5: encodeURI(id),
            cd6: encodeURI(website.category),
            dl: encodeURI(url),
          });
        });
        break;
      }
    }
  },
};

export default Interests;

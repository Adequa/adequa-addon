Adequa.model.interest = {};

Adequa.model.interest.getIfExists = function (interest) {
  return Adequa.db.interests.find({
    selector: {
      category: interest.category
    }
  }).then(function (item) {
    return Promise.resolve(item.docs.length > 0 ? item.docs[0] : false);
  }).catch(function () {
    return Promise.resolve(false);
  });
};

Adequa.model.interest.saveOrUpdate = function (interest, url, website = {}) {
  return new Promise((resolve, reject) => {
    Adequa.model.interest.getIfExists(interest).then(existingInterest => {
      const status = (existingInterest || {}).status || {};
      status[`${website.company}_${website.action_type}`] = (status[`${website.company}_${website.action_type}`] || 0) + 1;
      interest.status = status;
      if (existingInterest) {
        const newInterest = interest;
        Adequa.model.interest.update(newInterest)
          .then(res => resolve(res.id));

        newInterest.old_interest_parameters = existingInterest.parameters;
        newInterest.new_interest_parameters = interest.parameters;
        delete newInterest.parameters;
        Adequa.process.analytics.sendAnonymousEvent(url, "advertising", "update_interest", JSON.stringify(newInterest));

      } else {
        Adequa.process.analytics.sendAnonymousEvent(url, "advertising", "new_interest", JSON.stringify(interest));
        Adequa.model.interest.save(interest)
          .then(res => resolve(res.id));
      }
    });
  });
};

Adequa.model.interest.save = function (interest) {
  interest.creation_date = Date.now();
  interest.last_update_date = Date.now();
  interest.nb_actions = 1;

  return Adequa.db.interests.post(interest).catch(console.warn);
};

Adequa.model.interest.update = function (interest) {
  interest.last_update_date = Date.now();
  interest.nb_actions = interest.nb_actions + 1;

  return Adequa.db.interests.put(interest).catch(console.warn);
};

Adequa.model.interest.getAllCategories = function () {
  return new Promise((resolve, reject) => {
    Adequa.db.interests.allDocs({include_docs: true})
      .then(response => resolve(
        response.rows
          .filter(row => row.doc.status === "active")
          .map(row => row.doc.category)
          .sort((a, b) => a.toString().toLowerCase().localeCompare(b.toString().toLowerCase()))));
  });
};

Adequa.model.interest.getAll = function () {
  return new Promise((resolve, reject) => {
    Adequa.db.interests.allDocs({include_docs: true})
      .then(response => resolve(
        response.rows
          .map(row => row.doc)));
  });
};

Adequa.model.offer = {};

Adequa.model.offer.save = function (interest) {
  return Adequa.db.offers.post(interest).catch(console.warn);
};

Adequa.model.offer.update = function (offer) {
  offer.nb_impressions = offer.nb_impressions + 1;

  return Adequa.db.offers.put(offer, {force: true}).catch(console.warn);
};

Adequa.model.offer.getAll = function () {
  return new Promise((resolve, reject) => {
    Adequa.db.offers.allDocs({include_docs: true})
      .then(response => resolve(
        response.rows
          .map(row => row.doc)));
  });
};

Adequa.model.offer.getAllSorted = function () {
  return new Promise((resolve, reject) => {
    Adequa.db.offers.query(function (doc, emit) {
      emit(doc.generated_at);
    }, {include_docs: true, descending: true}).then(response => resolve(
      response.rows.map(row => row.doc)));
  });
};

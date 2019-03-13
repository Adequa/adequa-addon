Adequa.model.impression = {};

Adequa.model.impression.save = function (impression) {
  impression.creation_date = Date.now();

  return Adequa.db.impressions.post(impression).catch(console.warn);
};

Adequa.model.actionWithInterest = {};

Adequa.model.actionWithInterest.save = function (action) {
    return Adequa.db.actionsWithInterest.post(action).catch(console.warn);
};

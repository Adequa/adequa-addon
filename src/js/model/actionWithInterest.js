import PouchDB from 'pouchdb';
import Find from 'pouchdb-find';

PouchDB.plugin(Find);

const ActionWithInterestDB = new PouchDB('actionsWithInterest');

const ActionWithInterest = {
  save(action) {
    return ActionWithInterestDB.post(action).catch(console.warn);
  },
};

export default ActionWithInterest;

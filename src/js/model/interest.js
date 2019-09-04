import Analytics from 'process/utils/analytics';
import PouchDB from 'pouchdb';
import Find from 'pouchdb-find';

PouchDB.plugin(Find);

const InterestDB = new PouchDB('interests');

const Interest = {
  getIfExists(interest) {
    return InterestDB.find({
      selector: {
        category: interest.category,
      },
    })
      .then(item => Promise.resolve(item.docs.length > 0 ? item.docs[0] : false))
      .catch(() => Promise.resolve(false));
  },
  saveOrUpdate(interest, url, website = {}) {
    return new Promise((resolve, reject) => {
      Interest.getIfExists(interest).then(existingInterest => {
        const status = (existingInterest || {}).status || {};
        status[`${website.company}_${website.action_type}`] = (status[`${website.company}_${website.action_type}`] || 0) + 1;
        interest.status = status;
        if (existingInterest) {
          const newInterest = interest;
          newInterest._id = existingInterest._id;
          newInterest._rev = existingInterest._rev;
          newInterest.nb_actions = existingInterest.nb_actions;

          if (interest.parameters && Object.values(interest.parameters).length && Object.values(interest.parameters)[0] !== undefined)
            newInterest.parameters = Object.assign({}, existingInterest.parameters, interest.parameters);
          else newInterest.parameters = existingInterest.parameters;

          Interest.update(newInterest).then(res => resolve(res.id));

          newInterest.old_interest_parameters = existingInterest.parameters;
          newInterest.new_interest_parameters = newInterest.parameters;

          delete newInterest.parameters;
          delete newInterest._id;
          delete newInterest._rev;
          Analytics.sendAnonymousEvent(url, 'advertising', 'update_interest', JSON.stringify(newInterest), undefined, {
            cd5: encodeURI(existingInterest._id),
            cd6: encodeURI(newInterest.category),
          });
        } else {
          Analytics.sendAnonymousEvent(url, 'advertising', 'new_interest', JSON.stringify(interest), undefined, {
            cd5: encodeURI(existingInterest._id),
            cd6: encodeURI(interest.category),
          });
          Interest.save(interest).then(res => resolve(res.id));
        }
      });
    });
  },
  save(interest) {
    interest.creation_date = Date.now();
    interest.last_update_date = Date.now();
    interest.nb_actions = 1;

    return InterestDB.post(interest).catch(console.warn);
  },
  update(interest) {
    interest.last_update_date = Date.now();
    interest.nb_actions = (interest.nb_actions || 1) + 1;

    return InterestDB.put(interest).catch(console.warn);
  },
  getAllCategories() {
    return new Promise((resolve, reject) => {
      InterestDB.allDocs({ include_docs: true }).then(response =>
        resolve(
          response.rows
            .filter(row => row.doc.status === 'active')
            .map(row => row.doc.category)
            .sort((a, b) =>
              a
                .toString()
                .toLowerCase()
                .localeCompare(b.toString().toLowerCase())
            )
        )
      );
    });
  },
  getAll() {
    return new Promise((resolve, reject) => {
      InterestDB.allDocs({ include_docs: true }).then(response => resolve(response.rows.map(row => row.doc)));
    });
  },
};

export default Interest;

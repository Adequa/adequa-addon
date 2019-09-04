import Storage from '../storage';

const Consent = {
  set(value, website = 'default') {
    Storage.consent[website] = value;
  },
  get(website = 'default') {
    return Storage.consent[website] || Storage.consent.default || [1];
  },
};

export default Consent;

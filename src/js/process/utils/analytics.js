import Consent from 'model/consent';
import Interest from 'model/interest';
import Utils from 'process/utils/utils';
import Constants from '../../constants';
import Storage from '../../storage';
import Resources from '../../resource';

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}

const Analytics = {
  async sendAnonymousEvent(url, categorie, action, label, value, additionalParams) {
    const hostname = Utils.hostname(url);

    const websiteConsent = Consent.get(hostname);
    let purposes = [];
    for (const id of websiteConsent || []) {
      purposes.push(Resources.adequaPurposes[id - 1].shortname);
    }
    let allowedPurposes = purposes.join(', ');
    if (allowedPurposes === '') allowedPurposes = 'Aucun';

    const consent = Consent.get('default');
    const interests = await Interest.getAllCategories();
    purposes = [];
    for (const id of consent || []) {
      purposes.push(Resources.adequaPurposes[id - 1].shortname);
    }
    let defaultAllowedPurposes = purposes.join(', ');
    if (defaultAllowedPurposes === '') defaultAllowedPurposes = 'Aucun';

    const d = new Date(Storage.installDate);
    const installDate = `${d.getFullYear()}-${`0${d.getMonth() + 1}`.slice(-2)}-${`0${d.getDate()}`.slice(-2)}`;

    const customDimensions = Object.assign(
      {
        cd1: allowedPurposes,
        cd2: defaultAllowedPurposes,
        cd3: installDate,
        cd4: Storage.convertedFrom,
        cd7: encodeURI(JSON.stringify(interests)),
      },
      additionalParams
    );

    const cid = uuidv4();

    const dimensions = Object.entries(customDimensions)
      .map(dimension => dimension.join('='))
      .join('&');
    let payload = `v=1&t=event&tid=${Constants.googleId}&cid=${cid}&ec=${categorie}&ea=${action}&aip=1&${dimensions}`;
    if (url !== 'nourl') payload += `&dh=${hostname}`;
    if (label) payload += `&el=${label}`;
    if (value !== undefined) payload += `&ev=${value}`;
    fetch(`https://www.google-analytics.com/collect`, { method: 'POST', body: payload }).catch(console.warn);
  },
};

export default Analytics;

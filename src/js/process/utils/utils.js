import Consent from 'model/consent';
import Constants from '../../constants';
import Storage from '../../storage';
import Resources from '../../resource';

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}

const Utils = {
  domain(url) {
    if (!url) return false;

    let hostname = url;

    const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match !== null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) hostname = match[2];

    let domain = hostname;

    if (hostname !== '') {
      const parts = hostname.split('.').reverse();

      if (parts !== null && parts.length > 1) {
        domain = `${parts[1]}.${parts[0]}`;

        if (hostname.toLowerCase().indexOf('.co.uk') !== -1 && parts.length > 2) {
          domain = `${parts[2]}.${domain}`;
        }
      }
    }
    return domain;
  },
  hostname(url) {
    if (!url) return false;

    let hostname = url;

    const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match !== null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) hostname = match[2];

    return hostname;
  },
  updateUninstallUrl() {
    const consent = Consent.get();

    const customDimensions = {
      // "cd2": allowedPurposes,
      cd3: Storage.installDate,
      cd4: Storage.convertedFrom,
    };

    const dimensions = Object.entries(customDimensions)
      .map(dimension => dimension.join('='))
      .join('&');

    const toRemove = {};
    for (const purpose of Resources.adequaPurposes) {
      toRemove[purpose.shortname] = consent.indexOf(purpose.id) === -1 ? 1 : 0;
    }

    const url = `https://byebye-adequa.me/uninstall.php?tid=${Constants.googleId}&cid=${uuidv4()}&toremove=${encodeURI(JSON.stringify(toRemove))}&dimensions=${encodeURI(
      dimensions
    )}`;
    browser.runtime.setUninstallURL(url);
  },
};

export default Utils;

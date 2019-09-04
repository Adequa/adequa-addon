import Constants from '../constants';
import Resources from '../resource';

const getAPIResponse = function getAPIResponse({ url, fallbackUrl }, callback) {
  fetch(url)
    .then(req => req.json()) // transformer la réponse en json
    .then(req => {
      callback(req);
    })
    .catch(() => {
      fetch(fallbackUrl)
        .then(req => req.json())
        .then(failoverReq => {
          callback(failoverReq);
        })
        .catch(() => console.log(`Error fetching resource`));
    });
};

export default function sync() {
  getAPIResponse({ url: `${Constants.uri}/api/resource-versions`, fallbackUrl: `/resources/resources-version.json` }, resources => {
    for (const resource of resources) {
      if (Resources.resourcesVersion) {
        const currentVersion = Resources.resourcesVersion.filter(r => r.name === resource.name).map(r => r.version)[0] || 0;
        if (resource.version !== currentVersion) {
          getAPIResponse(resource, response => {
            Resources[resource.name] = response;
          });
        }
      } else {
        getAPIResponse(resource, response => {
          Resources[resource.name] = response;
        });
      }
    }
    Resources.resourcesVersion = resources;
  });
}

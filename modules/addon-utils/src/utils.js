export const domain = function domain(url) {
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
};

export const hostname = function hostname(url) {
  if (!url) return false;

  let host = url;

  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match !== null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) host = match[2];

  return host;
};

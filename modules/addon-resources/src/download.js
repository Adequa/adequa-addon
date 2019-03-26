import store from '../../../src/store';

export default async function download(filename, mutationType) {
  const url = `${store.state.endpointUrl}api/${filename}`;
  const fallbackUrl = `/resources/${filename}.json`;

  let response = null;
  let data = null;

  try {
    response = await fetch(url);
    data = await response.json();
  } catch (err) {
    try {
      response = await fetch(fallbackUrl);
      data = await response.json();
    } catch (error) {
      console.warn(`Can't download resource ${filename}`);
      return;
    }
  }

  store.commit(mutationType, data);
}

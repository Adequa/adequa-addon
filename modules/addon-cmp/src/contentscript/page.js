import Page from '../../../addon-page';

export default `function ${Page.on.toString()};on('OPEN_MODAL', () => window.AdequaCmp.showCookieSettings());`;

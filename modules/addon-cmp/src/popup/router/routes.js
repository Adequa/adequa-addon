import CMPPageSettings from './pages/Settings';
import CMPPageCookies from './pages/Cookies';

export default [
  {
    name: 'MES CHOIX',
    path: '/choices',
    component: CMPPageSettings,
  },
  {
    name: 'MES COOKIES',
    path: '/cookies',
    component: CMPPageCookies,
  },
];

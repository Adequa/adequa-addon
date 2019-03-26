import CMP from '../../../modules/addon-cmp';
import HelloWorld from '../../../modules/addon-helloworld';

import Menu from './pages/Menu';
import Index from './pages/Index';

export default [
  ...CMP.Routes,
  ...HelloWorld.Routes,
  {
    name: 'Menu',
    path: '/',
    component: Menu,
  },
  {
    name: 'MES ENVIES',
    path: '/interests',
    component: Index,
  },
];

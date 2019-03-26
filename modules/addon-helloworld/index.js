import HelloWorld from './HelloWorld';

export default {
  ContentScript() {
    console.log('Hello world !');
  },
  Background() {
    console.log('Hello world !');
  },
  Routes: [
    {
      name: 'Hello World',
      path: '/hello',
      component: HelloWorld,
    },
  ],
};

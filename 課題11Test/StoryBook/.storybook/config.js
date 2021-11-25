import { configure } from '@storybook/react';

if (process.env.NODE_ENV === 'test') {
  require('babel-plugin-require-context-hook/register')();
}



const req = require.context('../src/', true, /\.stories\.(?:js|ts)x?$/);
configure(req, module);
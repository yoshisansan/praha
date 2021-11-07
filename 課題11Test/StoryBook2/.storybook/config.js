import { configure } from '@storybook/react';

const req = require.context('../src/story', true, /\.stories\.(?:js|ts)x?$/);
configure(req, module);
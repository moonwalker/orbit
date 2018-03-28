import { configure, addDecorator } from '@storybook/react';

// Dynamically load all stories.js
const req = require.context('../src', true, /stories\.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

import('../node_modules/@moonwalker/orbit-ui/dist/index.css');

configure(loadStories, module);

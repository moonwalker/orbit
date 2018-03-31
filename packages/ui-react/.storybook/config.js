import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '../node_modules/@moonwalker/orbit-ui/dist/orbit-ui.css';

// Dynamically load all stories.jsx
const req = require.context('../src', true, /stories\.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}


addDecorator(withKnobs);

configure(loadStories, module);

import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '../node_modules/@moonwalker/orbit-ui/dist/orbit-ui.css';

// Dynamically load all stories.jsx
const components = require.context('../src', true, /stories\.jsx?$/);
const examples = require.context('../examples', true, /stories\.jsx?$/)

function loadStories() {
  components.keys().forEach(filename => components(filename));
  examples.keys().forEach(filename => examples(filename));
}


addDecorator(withKnobs);

configure(loadStories, module);

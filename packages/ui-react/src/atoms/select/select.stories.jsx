import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Select } from './select';
import {
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE,
} from './select.constants';

const stories = storiesOf('Components/Atoms/Select', module);

const selectSize = size =>
  select('Size', SIZES, size || SIZE_MEDIUM);

const options = [
  'Option A',
  'Option B',
  'Option C',
];

stories.add('info', withInfo({ inline: true })(() => (
  <Select
    onChange={action('Change')}
    size="small"
    options={['Option A', 'Option B']}
  />
)));

stories.add('default', () => (
  <Select
    onChange={action('Change')}
    size={selectSize()}
    options={options}
  />
));

const optionsAttributes = [
  {
    text: 'Option A',
    value: 0,
  },
  {
    text: 'Option B',
    value: 1,
    selected: true,
  },
  {
    text: 'Option C',
    value: 2,
  },
];

stories.add('with options attributes', () => (
  <Select
    onChange={action('Change')}
    size={selectSize()}
    options={optionsAttributes}
  />
));

stories.add('with valid state', () => (
  <Select
    onChange={action('Change')}
    size={selectSize()}
    options={options}
    valid
  />
));

stories.add('with invalid state', () => (
  <Select
    onChange={action('Change')}
    size={selectSize()}
    options={options}
    valid={false}
  />
));

stories.add('with size modifier', () => (
  <Select
    onChange={action('Change')}
    size={selectSize(SIZE_LARGE)}
    options={options}
  />
));

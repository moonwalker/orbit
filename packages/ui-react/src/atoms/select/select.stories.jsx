import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Select } from './select';
import { SIZES, SIZE_MEDIUM, SIZE_LARGE } from './select.constants';
import classNamesOverride from './select.stories.override-modules.css';
import classNamesImport from './select.stories.import-modules.styl';

const stories = storiesOf('Components/Atoms/Select', module);

const selectSize = (size) => select('Size', SIZES, size || SIZE_MEDIUM);

const options = ['Option A', 'Option B', 'Option C'];

stories.add(
  'info',
  withInfo({ inline: true })(() => (
    <Select onChange={action('Change')} size="small" options={options} />
  ))
);

stories.add('default', () => (
  <Select onChange={action('Change')} size={selectSize()} options={options} />
));

const optionsAttributes = [
  {
    text: 'Option A',
    value: 0
  },
  {
    text: 'Option B',
    value: 1
  },
  {
    text: 'Option C',
    value: 2
  }
];

stories.add('with options attributes', () => (
  <Select
    onChange={action('Change')}
    size={selectSize()}
    options={optionsAttributes}
    defaultValue={1}
  />
));

stories.add('with valid state', () => (
  <Select onChange={action('Change')} size={selectSize()} options={options} valid />
));

stories.add('with invalid state', () => (
  <Select onChange={action('Change')} size={selectSize()} options={options} valid={false} />
));

stories.add('with size modifier', () => (
  <Select onChange={action('Change')} size={selectSize(SIZE_LARGE)} options={options} />
));

stories.add('with custom css-module class names', () => (
  <Select
    onChange={action('Change')}
    size={selectSize()}
    options={options}
    classNames={classNamesOverride}
  />
));

stories.add('with imported css-module class names', () => (
  <Select
    onChange={action('Change')}
    size={selectSize()}
    options={options}
    classNames={classNamesImport}
  />
));

stories.add('with children', () => (
  <Select onChange={action('Change')} size={selectSize()}>
    <optgroup label="Group A">
      <option value="a1">Option 1</option>
      <option value="a2">Option 2</option>
      <option value="a3">Option 3</option>
    </optgroup>
    <optgroup label="Group b">
      <option value="b1">Option 1</option>
      <option value="b2">Option 2</option>
      <option value="b3">Option 3</option>
    </optgroup>
  </Select>
));

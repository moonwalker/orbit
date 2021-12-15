import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { Input } from './input';
import { SIZES, SIZE_MEDIUM, SIZE_LARGE } from './input.constants';
import classNamesOverride from './input.stories.override-modules.css';
import classNamesImport from './input.stories.import-modules.styl';

const stories = storiesOf('Components/Atoms/Input', module);

const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);

stories.add('info', () => (
  <Input onChange={action('Change')} size="large" placeholder="Enter text here" />
));

stories.add('default', () => (
  <Input onChange={action('Change')} size={selectSize()} placeholder="Enter text here" />
));

stories.add('with size modifier', () => (
  <Input onChange={action('Change')} size={selectSize(SIZE_LARGE)} placeholder="Enter text here" />
));

stories.add('with valid state', () => (
  <Input onChange={action('Change')} size={selectSize()} placeholder="Enter text here" valid />
));

stories.add('with invalid state', () => (
  <Input
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid={false}
  />
));

stories.add('with custom css-module class names', () => (
  <Input
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    classNames={classNamesOverride}
  />
));

stories.add('with imported css-module class names', () => (
  <Input
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    classNames={classNamesImport}
  />
));

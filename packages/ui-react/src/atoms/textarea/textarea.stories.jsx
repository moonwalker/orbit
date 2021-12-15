import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { Textarea } from './textarea';
import { SIZES, SIZE_MEDIUM, SIZE_LARGE } from './textarea.constants';
import classNamesOverride from './textarea.stories.override-modules.css';
import classNamesImport from './textarea.stories.import-modules.styl';

const stories = storiesOf('Components/Atoms/Textarea', module);

const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);

stories.add('info', () => (
  <Textarea onChange={action('Change')} size="small" placeholder="Enter text here" />
));
stories.add('default', () => (
  <Textarea onChange={action('Change')} size={selectSize()} placeholder="Enter text here" />
));

stories.add('with size modifier', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize(SIZE_LARGE)}
    placeholder="Enter text here"
  />
));

stories.add('with valid state', () => (
  <Textarea onChange={action('Change')} size={selectSize()} placeholder="Enter text here" valid />
));

stories.add('with invalid state', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid={false}
  />
));

stories.add('with custom css-module class names', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    classNames={classNamesOverride}
  />
));

stories.add('with imported css-module class names', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    classNames={classNamesImport}
  />
));

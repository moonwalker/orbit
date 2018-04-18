import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Textarea } from './textarea';
import {
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE,
} from './textarea.constants';

const stories = storiesOf('Components/Atoms/Textarea', module);

const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);

stories.add('info', withInfo({ inline: true })(() => (
  <Textarea
    onChange={action('Change')}
    size="small"
    placeholder="Enter text here"
  />
)));
stories.add('default', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
  />
));

stories.add('with size modifier', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize(SIZE_LARGE)}
    placeholder="Enter text here"
  />
));

stories.add('with valid state', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid
  />
));

stories.add('with invalid state', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid={false}
  />
));

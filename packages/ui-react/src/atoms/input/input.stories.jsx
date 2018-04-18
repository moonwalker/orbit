import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Input } from './input';
import {
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE,
} from './input.constants';

const stories = storiesOf('Components/Atoms/Input', module);

const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);

stories.add('info', withInfo({ inline: true })(() => (
  <Input
    onChange={action('Change')}
    size="large"
    placeholder="Enter text here"
  />
)));

stories.add('default', () => (
  <Input
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
  />
));

stories.add('with size modifier', () => (
  <Input
    onChange={action('Change')}
    size={selectSize(SIZE_LARGE)}
    placeholder="Enter text here"
  />
));

stories.add('with valid state', () => (
  <Input
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid
  />
));

stories.add('with invalid state', () => (
  <Input
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid={false}
  />
));

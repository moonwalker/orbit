import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { Input } from './input';
import {
  SIZES,
  SIZE_MEDIUM,
} from './input.constants';

const stories = storiesOf('Components/Atoms/Input', module);

const selectSize = () => select('Size', SIZES, SIZE_MEDIUM);

stories.add('default', () => (
  <Input
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
  />
));

stories.add('valid', () => (
  <Input
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid
  />
));

stories.add('invalid', () => (
  <Input
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid={false}
  />
));

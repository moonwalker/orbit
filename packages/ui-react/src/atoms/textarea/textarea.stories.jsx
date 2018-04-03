import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { Textarea } from './textarea';
import {
  SIZES,
  SIZE_MEDIUM,
} from './textarea.constants';

const stories = storiesOf('Components/Atoms/Textarea', module);

const selectSize = () => select('Size', SIZES, SIZE_MEDIUM);

stories.add('default', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
  />
));

stories.add('valid', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid
  />
));

stories.add('invalid', () => (
  <Textarea
    onChange={action('Change')}
    size={selectSize()}
    placeholder="Enter text here"
    valid={false}
  />
));

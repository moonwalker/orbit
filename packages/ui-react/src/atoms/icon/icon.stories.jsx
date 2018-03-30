import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Icon } from './icon';
import {
  SIZES,
  SIZE_MEDIUM,
} from './icon.constants';

const stories = storiesOf('Components/Atoms/Icon', module);

const selectSize = () => select('Size', SIZES, SIZE_MEDIUM);
const selectName = () => select('Name', [
  'face',
  'search',
  'home',
], 'face');

stories.add('default', () => (
  <Icon
    size={selectSize()}
    name={selectName()}
  />
));

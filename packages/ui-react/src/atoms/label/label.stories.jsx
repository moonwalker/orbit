import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Label } from './label';
import {
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE,
} from './label.constants';

const stories = storiesOf('Components/Atoms/Label', module);

const selectSize = size =>
  select('Size', SIZES, size || SIZE_MEDIUM);

stories.add('default', () => (
  <Label>Username</Label>
));

stories.add('with size variation', () => (
  <Label size={selectSize(SIZE_LARGE)}>
    Username
  </Label>
));

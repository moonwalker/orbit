import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Label } from './label';
import {
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE,
} from './label.constants';

const stories = storiesOf('Components/Atoms/Label', module);

const selectSize = size =>
  select('Size', SIZES, size || SIZE_MEDIUM);

stories.add('info', withInfo({ inline: true })(() => (
  <Label size="large">
    Username
  </Label>
)));

stories.add('default', () => (
  <Label>Username</Label>
));

stories.add('with size modifier', () => (
  <Label size={selectSize(SIZE_LARGE)}>
    Username
  </Label>
));

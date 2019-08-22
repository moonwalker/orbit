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
import classNamesOverride from './label.stories.override-modules.css';
import classNamesImport from './label.stories.import-modules.styl';

const stories = storiesOf('Components/Atoms/Label', module);

const selectSize = (size) => select('Size', SIZES, size || SIZE_MEDIUM);

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

stories.add('with custom css-module class names', () => (
  <Label
    size={selectSize()}
    classNames={classNamesOverride}
  >
    Username
  </Label>
));

stories.add('with imported css-module class names', () => (
  <Label
    size={selectSize()}
    classNames={classNamesImport}
  >
    Username
  </Label>
));

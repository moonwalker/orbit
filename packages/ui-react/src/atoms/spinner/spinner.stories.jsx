import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import {
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE,
} from './spinner.constants';
import { Spinner } from './spinner';

const stories = storiesOf('Components/Atoms/Spinner', module);

const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);

stories.add('info', withInfo({ inline: true })(() => (
  <Spinner size="small" />
)));

stories.add('default', () => (
  <Spinner size={selectSize()} />
));

stories.add('with size modifier', () => (
  <Spinner size={selectSize(SIZE_LARGE)} />
));

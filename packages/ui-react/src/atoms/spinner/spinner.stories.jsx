import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import {
  SIZES,
  SIZE_LARGE,
} from './spinner.constants';
import { Spinner } from './spinner';

const stories = storiesOf('Components/Atoms/Spinner', module);

const selectSize = () => select('Size', SIZES, SIZE_LARGE);

stories.add('info', withInfo({ inline: true })(() => (
  <Spinner size="small" />
)));

stories.add('default', () => (
  <Spinner />
));

stories.add('with custom size', () => (
  <Spinner size={selectSize()} />
));

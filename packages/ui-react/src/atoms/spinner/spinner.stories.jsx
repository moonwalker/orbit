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
import classNamesOverride from './spinner.stories.override-modules.css';
import classNamesImport from './spinner.stories.import-modules.styl';

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

stories.add('with custom css-module class names', () => (
  <Spinner
    size={selectSize()}
    classNames={classNamesOverride}
  />
));

stories.add('with imported css-module class names', () => (
  <Spinner
    size={selectSize()}
    classNames={classNamesImport}
  />
));

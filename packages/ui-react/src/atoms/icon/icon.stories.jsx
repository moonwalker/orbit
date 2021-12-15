import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Icon } from './icon';
import { SIZES, SIZE_MEDIUM, SIZE_LARGE } from './icon.constants';

import classNamesOverride from './icon.stories.override-modules.css';
import classNamesImport from './icon.stories.import-modules.styl';

const stories = storiesOf('Components/Atoms/Icon', module);

const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);
const selectName = () => select('Name', ['face', 'search', 'home'], 'face');

stories.add('info', () => <Icon size="large" name="home" />);

stories.add('default', () => <Icon size={selectSize()} name={selectName()} />);

stories.add('with size modifier', () => <Icon size={selectSize(SIZE_LARGE)} name={selectName()} />);

stories.add('with custom css-module class names', () => (
  <Icon size={selectSize()} name={selectName()} classNames={classNamesOverride} />
));

stories.add('with imported css-module class names', () => (
  <Icon size={selectSize()} name={selectName()} classNames={classNamesImport} />
));

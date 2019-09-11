import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { ButtonIcon } from './button-icon';
import {
  KINDS,
  KIND_DEFAULT,
  KIND_DANGER,
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE
} from './button-icon.constants';
import classNamesOverride from './button-icon.stories.override-modules.css';
import classNamesImport from './button-icon.stories.import-modules.styl';

const stories = storiesOf('Components/Molecules/ButtonIcon', module);

const selectKind = (kind = KIND_DEFAULT) => select('Kind', KINDS, kind);
const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);
const selectName = (name = 'face') =>
  select('Icon', ['face', 'backup', 'keyboard_arrow_right'], name);

stories.add(
  'info',
  withInfo({ inline: true })(() => (
    <ButtonIcon onClick={action('Click')} kind="primary" size="large" name="home" />
  ))
);

stories.add('default', () => (
  <ButtonIcon
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    name={selectName()}
  />
));

stories.add('with kind modifier', () => (
  <ButtonIcon
    onClick={action('Click')}
    kind={selectKind(KIND_DANGER)}
    size={selectSize()}
    name={selectName()}
  />
));

stories.add('with size modifier', () => (
  <ButtonIcon
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize(SIZE_LARGE)}
    name={selectName()}
  />
));

stories.add('with icon name', () => (
  <ButtonIcon
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize(SIZE_LARGE)}
    name={selectName('backup')}
  />
));

stories.add('with render prop', () => (
  <ButtonIcon
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    name={selectName('backup')}
    renderIcon={(props) => <span>{`${props.name} / ${props.size}`}</span>}
  />
));

stories.add('with custom css-module class names', () => (
  <ButtonIcon
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    name={selectName('backup')}
    classNames={classNamesOverride}
  />
));

stories.add('with imported css-module class names', () => (
  <ButtonIcon
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    name={selectName('backup')}
    classNames={classNamesImport}
  />
));

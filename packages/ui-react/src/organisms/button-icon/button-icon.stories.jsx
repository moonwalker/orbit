import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { ButtonIcon } from './button-icon';
import {
  KINDS,
  KIND_DEFAULT,
  KIND_DANGER,
  SIZES,
  SIZE_LARGE,
} from './button-icon.constants';

const stories = storiesOf('Components/Organisms/ButtonIcon', module);

const selectKind = (kind = KIND_DEFAULT) => select('Kind', KINDS, kind);
const selectSize = (size = null) => select('Size', SIZES, size);
const selectName = (name = 'face') => select('Icon', ['face', 'backup', 'keyboard_arrow_right'], name);

stories.add('default', () => (
  <ButtonIcon
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    name={selectName()}
  />
));

stories.add('with kind', () => (
  <ButtonIcon
    onClick={action('Click')}
    kind={selectKind(KIND_DANGER)}
    size={selectSize()}
    name={selectName()}
  />
));

stories.add('with size', () => (
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

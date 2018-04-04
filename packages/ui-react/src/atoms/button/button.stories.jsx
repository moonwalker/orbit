import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import { Icon } from '../icon/icon';
import { Button } from './button';
import {
  KINDS,
  KIND_DEFAULT,
  KIND_DANGER,
  SIZES,
  SIZE_LARGE,
} from './button.constants';

const stories = storiesOf('Components/Atoms/Button', module);

const selectKind = (kind = KIND_DEFAULT) => select('Kind', KINDS, kind);
const selectSize = (size = null) => select('Size', SIZES, size);
const getClear = (clear = false) => boolean('Clear', clear);

stories.add('default', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
  >
    Call to action
  </Button>
));

stories.add('with kind', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind(KIND_DANGER)}
    size={selectSize()}
    clear={getClear()}
  >
    Call to action
  </Button>
));

stories.add('with clear', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear(true)}
  >
    Call to action
  </Button>
));

stories.add('with left icon', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
  >
    <Icon name="backup" />
    Call to action
  </Button>
));

stories.add('with different icon size', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
  >
    <Icon
      name="backup"
      size={SIZE_LARGE}
    />
    Call to action
  </Button>
));

stories.add('with custom content', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
  >
    <em className="custom">Call</em>
    to action
  </Button>
));

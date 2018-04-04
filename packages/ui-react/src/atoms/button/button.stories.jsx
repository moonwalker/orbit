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

const selectKind = kind => select('Kind', KINDS, kind || KIND_DEFAULT);
const selectSize = size => select('Size', SIZES, size || null);
const getClear = () => boolean('Clear', false);

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
  >
    Call to action
  </Button>
));

stories.add('with clear', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    clear
  >
    Call to action
  </Button>
));

stories.add('with left icon', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
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
  >
    <em className="custom">Call</em>
    to action
  </Button>
));

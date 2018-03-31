import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { Icon } from '../icon/icon';
import { Button } from './button';
import {
  KINDS,
  KIND_DEFAULT,
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE,
} from './button.constants';

const stories = storiesOf('Components/Atoms/Button', module);

const selectKind = () => select('Kind', KINDS, KIND_DEFAULT);
const selectSize = () => select('Size', SIZES, SIZE_MEDIUM);

stories.add('default', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
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

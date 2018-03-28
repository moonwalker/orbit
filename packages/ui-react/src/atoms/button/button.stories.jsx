import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { Button } from './button';
import {
  KINDS,
  KIND_DEFAULT,
  SIZES,
  SIZE_MEDIUM,
} from './button.constants';

const stories = storiesOf('Components/Atoms/Button', module);

const selectKind = () => select('Type', KINDS, KIND_DEFAULT);
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

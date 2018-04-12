import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Icon } from './icon';
import { SIZES } from './icon.constants';

const stories = storiesOf('Components/Atoms/Icon', module);

const selectSize = () => select('Size', SIZES, null);
const selectName = () => select('Name', [
  'face',
  'search',
  'home',
], 'face');

stories.add('info', withInfo({ inline: true })(() => (
  <Icon
    size="large"
    name="home"
  />
)));

stories.add('default', () => (
  <Icon
    size={selectSize()}
    name={selectName()}
  />
));

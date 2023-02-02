import React from 'react';
import { storiesOf } from '@storybook/react';

import { Stack } from '../stack/stack';
import { Separator } from './separator';

import css from './separator.modules.styl';

const stories = storiesOf('Components/Atoms/Separator', module);

stories.add('default', () => <Separator className={css.root} />);

stories.add('horizontal (default)', () => (
  <Stack className={css.containerWidth} align="center">
    <span>🤖 Robo</span>
    <Separator className={css.root} orientation="horizontal" />
    <span>🚀 Cosmo</span>
  </Stack>
));

stories.add('vertical', () => (
  <Stack className={css.containerHeight} align="center">
    <span>🤖 Robo</span>
    <Separator className={css.root} orientation="vertical" />
    <span>🚀 Cosmo</span>
  </Stack>
));

stories.add('custom CSS', () => (
  <Stack className={css.containerHeight} align="center">
    <span>🤖 Robo</span>
    <Separator className={css.custom} orientation="vertical" />
    <span>🚀 Cosmo</span>
    <Separator className={css.custom} orientation="vertical" />
    <span>🎨 Picasso</span>
  </Stack>
));

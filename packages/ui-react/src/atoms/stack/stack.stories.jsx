import React from 'react';
import { storiesOf } from '@storybook/react';

import { Stack } from './stack';
import { HStack } from './hstack';
import { VStack } from './vstack';

import css from './stack.modules.styl';

const stories = storiesOf('Components/Atoms/Stack', module);
const spacing = 10;

stories.add('default', () => (
  <Stack spacing={spacing}>
    <span>🤖</span>
    <span>🚀</span>
    <span>❤️‍🔥</span>
    <span>🤟🏽</span>
  </Stack>
));

stories.add('direction row (default)', () => (
  <Stack direction="row" spacing={spacing}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Stack>
));

stories.add('direction column', () => (
  <Stack direction="column" spacing={spacing}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Stack>
));

stories.add('wrap reverse', () => (
  <Stack direction="row" spacing={spacing} wrap="wrap-reverse" className={css.fixedWidth}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Stack>
));

stories.add('custom CSS', () => (
  <Stack
    className={css.custom}
    direction="column"
    justify="center"
    align="center"
    spacing={spacing}
  >
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Stack>
));

stories.add('HStack', () => (
  <HStack spacing={spacing}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </HStack>
));

stories.add('VStack', () => (
  <VStack spacing={spacing} reverse>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </VStack>
));

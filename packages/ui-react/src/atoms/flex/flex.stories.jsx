import React from 'react';
import { storiesOf } from '@storybook/react';

import { Flex } from './flex';

import css from './flex.modules.styl';

const stories = storiesOf('Components/Atoms/Flex', module);
const spacing = 15;

stories.add('default', () => (
  <Flex spacing={spacing}>
    <span>🤖</span>
    <span>🚀</span>
    <span>❤️‍🔥</span>
    <span>🤟🏽</span>
  </Flex>
));

stories.add('direction row (default)', () => (
  <Flex direction="row" spacing={spacing}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Flex>
));

stories.add('direction column', () => (
  <Flex direction="column" spacing={spacing}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Flex>
));

stories.add('wrap', () => (
  <Flex direction="row" spacing={spacing} wrap="wrap" className={css.fixedWidth}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Flex>
));

stories.add('custom CSS', () => (
  <Flex
    className={css.custom}
    direction="row"
    justify="flex-end"
    alignItems="flex-end"
    spacing={spacing}
    wrap="wrap"
  >
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Flex>
));

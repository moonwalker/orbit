import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grid } from './grid';

import css from './grid.modules.styl';

const stories = storiesOf('Components/Atoms/Grid', module);
const spacing = 15;

stories.add('default', () => (
  <Grid>
    <span>🤖</span>
    <span>🚀</span>
    <span>❤️‍🔥</span>
    <span>🤟🏽</span>
  </Grid>
));

stories.add('direction row (default)', () => (
  <Grid gap={spacing}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Grid>
));

stories.add('direction column', () => (
  <Grid gap={spacing}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Grid>
));

stories.add('rows and columns', () => (
  <Grid
    gap={spacing}
    autoFlow="column"
    templateRows="1fr 2fr 3fr"
    templateColumns="50px 100px 130px"
    className={css.border}
  >
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Grid>
));

stories.add('custom CSS', () => (
  <Grid className={css.custom} gap={spacing}>
    <div>🍜 Eat</div>
    <div>😴 Sleep</div>
    <div>🥳 Rave</div>
    <div>🔁 Repeat</div>
  </Grid>
));

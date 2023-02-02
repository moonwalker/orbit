import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container } from './container';

import css from './container.modules.styl';

const stories = storiesOf('Components/Atoms/Container', module);

stories.add('default', () => (
  <Container className={css.root}>
    <span>🤖 Robo</span>
    &nbsp;&nbsp;
    <span>🚀 Cosmo</span>
    &nbsp;&nbsp;
    <span>🎨 Picasso</span>
  </Container>
));

stories.add('centerContent & fluid (100% width)', () => (
  <Container className={css.root} fluid centerContent>
    <span>🤖 Robo</span>
    &nbsp;&nbsp;
    <span>🚀 Cosmo</span>
    &nbsp;&nbsp;
    <span>🎨 Picasso</span>
  </Container>
));

stories.add('margins with mx, my', () => (
  <Container className={css.root} mx={75} my={45}>
    <div>mx={35}</div>
    <div>my={45}</div>
  </Container>
));

stories.add('padding with pt, pr, pb, pl and width', () => (
  <Container className={css.root} pt={15} pr={40} pl={25} pb={30} width={150}>
    <div>pt="15"</div>
    <div>pr="40"</div>
    <div>pb="30"</div>
    <div>pl="25"</div>
    <div>width="150"</div>
  </Container>
));

stories.add('color, bgColor, opacity', () => (
  <Container className={css.root} bgColor="pink" color="purple" opacity={0.5}>
    <div>bgColor="pink"</div>
    <div>color="purple"</div>
    <div>opacity={0.5}</div>
  </Container>
));

stories.add('fancy background with bg', () => (
  <Container
    className={css.root}
    p={15}
    color="white"
    bg="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
  >
    <div>p="15"</div>
    <div>color="white"</div>
    <div>
      bg="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1)
      100%)"
    </div>
  </Container>
));

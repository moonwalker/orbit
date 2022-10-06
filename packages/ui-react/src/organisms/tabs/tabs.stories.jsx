import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tabs } from './';

const stories = storiesOf('Components/Organisms/Tabs', module);

/* eslint-disable react/no-unknown-property */
stories.add('info', () => (
  <Tabs>
    <span>Item 1</span>
    <span isTabActive>Item 2</span>
    <span>Item 3</span>
  </Tabs>
));

stories.add('default', () => (
  <Tabs>
    <span>Item 1</span>
    <span isTabActive>Item 2</span>
    <span>Item 3</span>
  </Tabs>
));

stories.add('with custom render', () => (
  <Tabs as="nav">
    <span>Item 1</span>
    <span isTabActive>Item 2</span>
    <span>Item 3</span>
  </Tabs>
));
/* eslint-enable react/no-unknown-property */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Tabs } from './';

const stories = storiesOf('Components/Organisms/Tabs', module);

stories.add(
  'info',
  withInfo({ inline: true })(() => (
    <Tabs>
      <span>Item 1</span>
      <span isTabActive>Item 2</span>
      <span>Item 3</span>
    </Tabs>
  ))
);

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

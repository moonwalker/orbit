import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Dropdown } from './dropdown';

const stories = storiesOf('Components/Organisms/Dropdown', module);

stories.add('info', withInfo({ inline: true })(() => (
  <div style={{ position: 'relative' }}>
    <p>Dropdown anchor</p>
    <Dropdown>
      <p>Content dropdown</p>
    </Dropdown>
  </div>
)));

stories.add('default', () => (
  <div style={{ position: 'relative' }}>
    <p>Dropdown anchor</p>
    <Dropdown>
      <p>Content dropdown</p>
    </Dropdown>
  </div>
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Dropdown } from './dropdown';
import classNamesOverride from './dropdown.stories.override-modules.css';
import classNamesImport from './dropdown.stories.import-modules.styl';

const stories = storiesOf('Components/Organisms/Dropdown', module);

stories.add(
  'info',
  withInfo({ inline: true })(() => (
    <div style={{ position: 'relative' }}>
      <p>Dropdown anchor</p>
      <Dropdown>
        <p>Content dropdown</p>
      </Dropdown>
    </div>
  ))
);

stories.add('default', () => (
  <div style={{ position: 'relative' }}>
    <p>Dropdown anchor</p>
    <Dropdown>
      <p>Content dropdown</p>
    </Dropdown>
  </div>
));

stories.add('with custom css-module class names', () => (
  <div style={{ position: 'relative' }}>
    <p>Dropdown anchor</p>
    <Dropdown classNames={classNamesOverride}>
      <p>Content dropdown</p>
    </Dropdown>
  </div>
));

stories.add('with imported css-module class names', () => (
  <div style={{ position: 'relative' }}>
    <p>Dropdown anchor</p>
    <Dropdown classNames={classNamesImport}>
      <p>Content dropdown</p>
    </Dropdown>
  </div>
));

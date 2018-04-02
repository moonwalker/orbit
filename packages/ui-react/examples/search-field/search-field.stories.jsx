import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import items from './search-field.fixtures.json';
import { SearchField } from './search-field';

const stories = storiesOf('Examples/SearchField', module);

const handleOnSelect = item => action('Selected', item);

stories.add('default', () => (
  <div style={{ maxWidth: '380px', margin: '0 auto', padding: '1rem' }}>
    <SearchField
      items={items}
      onSelect={handleOnSelect()}
    />
  </div>
));

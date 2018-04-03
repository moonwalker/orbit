import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ContactForm } from './contact-form';

const stories = storiesOf('Examples/Contact Form', module);

stories.add('default', () => (
  <div style={{ maxWidth: '380px', margin: '0 auto', padding: '1rem' }}>
    <ContactForm onSubmit={action('Submit')} />
  </div>
));

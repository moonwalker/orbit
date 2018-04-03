import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  Label,
  Select,
  Textarea,
  Button,
} from '../../src';
import './contact-form.css';

export const ContactForm = (props) => {
  const { onSubmit } = props;

  const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <div className="contact-form__field">
        <Label className="contact-form__field__label">
          First name
        </Label>
        <Input
          name="firstname"
          placeholder="First name"
        />
      </div>

      <div className="contact-form__field">
        <Label className="contact-form__field__label">
          Last name
        </Label>
        <Input
          name="lastname"
          placeholder="Last name"
        />
      </div>

      <div className="contact-form__field">
        <Label className="contact-form__field__label">
          Country
        </Label>
        <Select
          name="country"
          options={countries}
        />
      </div>

      <div className="contact-form__field">
        <Label className="contact-form__field__label">
          Message
        </Label>
        <Textarea
          name="message"
          placeholder="Enter your message"
          rows="5"
        />
      </div>

      <div className="contact-form__actions">
        <Button>
          Send
        </Button>
      </div>
    </form>
  );
};

ContactForm.defaultProps = {
  onSubmit: null,
};

ContactForm.propTypes = {
  /* Form submit handler */
  onSubmit: PropTypes.func,
};

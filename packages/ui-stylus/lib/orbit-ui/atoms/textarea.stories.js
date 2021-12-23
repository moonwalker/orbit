import cx from 'classnames';

import modifiers from '../modifiers.json';
import './textarea.styl';

export default {
  title: 'Atoms/Textarea',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(modifiers.components.input.size),
      defaultValue: modifiers.size.medium
    },
    valid: {
      control: 'boolean',
      defaultValue: false
    },
    invalid: {
      control: 'boolean',
      defaultValue: false
    }
  }
};

const Template = ({ placeholder, size, valid, invalid }) => {
  const prefix = 'ui-textarea';
  const element = document.createElement('textarea');
  element.placeholder = placeholder;
  element.className = cx(
    prefix,
    `${prefix}--${size}`,
    valid && `${prefix}--valid`,
    invalid && `${prefix}--invalid`
  );

  return element;
};

export const Default = Template.bind();

Default.args = {
  placeholder: 'Email'
};

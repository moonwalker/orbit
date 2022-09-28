import cx from 'classnames';

import modifiers from '../modifiers.json';
import './input.styl';

export default {
  title: 'Atoms/Input',
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
  const prefix = 'ui-input';
  const element = document.createElement('input');
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

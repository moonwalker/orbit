import cx from 'classnames';

import modifiers from '../modifiers.json';
import './select.styl';

export default {
  title: 'Atoms/Select',
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
  const prefix = 'ui-select';
  const element = document.createElement('select');
  const option = document.createElement('option');
  option.innerText = placeholder;
  element.appendChild(option);
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

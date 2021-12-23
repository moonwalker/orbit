import cx from 'classnames';

import modifiers from '../modifiers.json';
import './button-icon.styl';

export default {
  title: 'Molecules/ButtonIcon',
  argTypes: {
    kind: {
      control: 'select',
      options: Object.values(modifiers.kind),
      defaultValue: modifiers.kind.default
    },
    size: {
      control: 'select',
      options: Object.values(modifiers.components.buttonIcon.size),
      defaultValue: modifiers.components.buttonIcon.size.medium
    }
  }
};

const Template = ({ kind, size }) => {
  const prefix = 'ui-button-icon';
  const element = document.createElement('button');
  element.className = cx(`${prefix}`, `${prefix}--${kind}`, `${prefix}--${size}`);

  const icon = document.createElement('i');
  icon.innerText = 'backup';
  icon.className = `${prefix} ${prefix}--${size}`;
  element.appendChild(icon);

  return element;
};

export const Default = Template.bind();

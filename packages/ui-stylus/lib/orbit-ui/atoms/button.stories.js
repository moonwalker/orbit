import cx from 'classnames';

import modifiers from '../modifiers.json';
import './button.styl';

export default {
  title: 'Atoms/Button',
  argTypes: {
    kind: {
      control: 'select',
      options: Object.values(modifiers.kind),
      defaultValue: modifiers.kind.default
    },
    size: {
      control: 'select',
      options: Object.values(modifiers.components.button.size),
      defaultValue: modifiers.components.button.size.medium
    },
    clear: {
      control: 'boolean',
      defaultValue: false
    },
    outline: {
      control: 'boolean',
      defaultValue: false
    },
    inline: {
      control: 'boolean',
      defaultValue: false
    },
    onClick: { action: 'onClick' }
  }
};

const Template = ({ label, kind, size, clear, outline, inline, onClick }) => {
  const element = document.createElement('button');
  element.type = 'button';
  element.innerText = label;
  element.addEventListener('click', onClick);
  element.className = cx(
    'ui-button',
    `ui-button--${kind}`,
    `ui-button--${size}`,
    clear && `ui-button--clear ui-button--clear--${kind}`,
    outline && `ui-button--outline ui-button--outline--${size} ui-button--outline--${kind}`,
    inline && `ui-button--inline ui-button--inline--${kind}`
  );

  return element;
};

export const Default = Template.bind();

Default.args = {
  label: 'Action'
};

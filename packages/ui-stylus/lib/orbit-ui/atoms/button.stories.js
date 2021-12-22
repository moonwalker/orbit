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
      options: Object.values(modifiers.size),
      defaultValue: modifiers.size.medium
    },
    clear: {
      value: false
    },
    onClick: { action: 'onClick' }
  }
};

const Template = ({ label, kind, size, clear, onClick }) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  btn.className = cx(
    'ui-button',
    `ui-button--${kind}`,
    `ui-button--${size}`,
    clear && `ui-button--clear ui-button--clear--${kind}`
  );

  return btn;
};

export const Default = Template.bind();

Default.args = {
  label: 'Action'
};

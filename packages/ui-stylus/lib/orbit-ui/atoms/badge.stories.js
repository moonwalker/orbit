import cx from 'classnames';

import modifiers from '../modifiers.json';
import './badge.styl';

export default {
  title: 'Atoms/Badge',
  argTypes: {
    kind: {
      control: 'select',
      options: Object.values(modifiers.kind),
      defaultValue: modifiers.kind.default
    },
    size: {
      control: 'select',
      options: Object.values(modifiers.components.badge.size),
      defaultValue: modifiers.size.medium
    }
  }
};

const Template = ({ label, kind, size }) => {
  const prefix = 'ui-badge';
  const element = document.createElement('div');
  element.innerText = label;
  element.className = cx(prefix, `${prefix}--${kind}`, `${prefix}--${size}`);

  return element;
};

export const Default = Template.bind();

Default.args = {
  label: '1'
};

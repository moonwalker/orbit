import cx from 'classnames';

import modifiers from '../modifiers.json';
import './icon.styl';

export default {
  title: 'Atoms/Icon',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(modifiers.components.icon.size),
      defaultValue: modifiers.size.medium
    }
  }
};

const Template = ({ label, size }) => {
  const prefix = 'ui-icon';
  const element = document.createElement('span');
  element.innerText = label;
  element.className = cx(prefix, `${prefix}--${size}`);

  return element;
};

export const Default = Template.bind();

Default.args = {
  label: 'close'
};

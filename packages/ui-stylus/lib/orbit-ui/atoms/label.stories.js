import cx from 'classnames';

import modifiers from '../modifiers.json';
import './label.styl';

export default {
  title: 'Atoms/Label',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(modifiers.components.label.size)
    }
  }
};

const Template = ({ label, size }) => {
  const prefix = 'ui-label';
  const element = document.createElement('label');
  element.innerText = label;
  element.className = cx(prefix, `${prefix}--${size}`);

  return element;
};

export const Default = Template.bind();

Default.args = {
  label: 'Email:'
};

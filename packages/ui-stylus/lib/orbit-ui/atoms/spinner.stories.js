import cx from 'classnames';

import modifiers from '../modifiers.json';
import './spinner.styl';

export default {
  title: 'Atoms/Spinner',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(modifiers.components.spinner.size),
      defaultValue: modifiers.size.medium
    }
  }
};

const Template = ({ size }) => {
  const prefix = 'ui-spinner';
  const element = document.createElement('span');
  element.className = cx(prefix, `${prefix}--${size}`);

  return element;
};

export const Default = Template.bind();

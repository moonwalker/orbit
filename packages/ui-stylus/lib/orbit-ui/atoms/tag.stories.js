import cx from 'classnames';

import modifiers from '../modifiers.json';
import './tag.styl';

export default {
  title: 'Atoms/Tag',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(modifiers.components.tag.size),
      defaultValue: modifiers.size.medium
    },
    kind: {
      control: 'select',
      options: Object.values(modifiers.kind)
    }
  }
};

const Template = ({ label, kind, size }) => {
  const prefix = 'ui-tag';
  const element = document.createElement('span');
  element.innerText = label;
  element.className = cx(prefix, `${prefix}--${size}`, kind && `${prefix}--${kind}`);

  return element;
};

export const Default = Template.bind();

Default.args = {
  label: 'news'
};

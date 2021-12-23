import cx from 'classnames';

import modifiers from '../modifiers.json';
import './alert.styl';

export default {
  title: 'Atoms/Alert',
  argTypes: {
    kind: {
      control: 'select',
      options: Object.values(modifiers.kind),
      defaultValue: modifiers.kind.default
    },
    size: {
      control: 'select',
      options: Object.values(modifiers.components.alert.size),
      defaultValue: modifiers.size.medium
    },
    outline: {
      control: 'boolean',
      defaultValue: false
    }
  }
};

const Template = ({ content, kind, size, outline }) => {
  const prefix = 'ui-alert';
  const element = document.createElement('div');
  element.innerText = content;
  element.className = cx(
    `${prefix}`,
    `${prefix}--${kind}`,
    `${prefix}--${size}`,
    outline && `${prefix}--outline ${prefix}--outline--${kind}`
  );

  return element;
};

export const Default = Template.bind();

Default.args = {
  content: 'Lorem ipsum dolor sit amed'
};

import cx from 'classnames';

import modifiers from '../modifiers.json';
import './progress.styl';

export default {
  title: 'Molecules/Progress',
  argTypes: {
    kind: {
      control: 'select',
      options: Object.values(modifiers.kind),
      defaultValue: modifiers.kind.default
    },
    progress: {
      control: 'number',
      defaultValue: 50
    }
  }
};

const Template = ({ kind, progress }) => {
  const prefix = 'ui-progress';
  const element = document.createElement('div');
  element.className = cx(`${prefix}`, `${prefix}--${kind}`);

  const innerElement = document.createElement('div');
  innerElement.className = `${prefix}__bar ${prefix}__bar--${kind}`;
  innerElement.style.width = `${progress}%`;

  element.appendChild(innerElement);

  return element;
};

export const Default = Template.bind();

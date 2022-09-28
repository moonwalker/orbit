import cx from 'classnames';

import modifiers from '../modifiers.json';
import './list-group.styl';

export default {
  title: 'Molecules/ListGroup',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(modifiers.components.listGroup.size),
      defaultValue: modifiers.components.listGroup.size.medium
    }
  }
};

const Template = ({ size }) => {
  const prefix = 'ui-list-group';
  const element = document.createElement('div');
  element.className = cx(`${prefix}`, `${prefix}--${size}`);

  const items = [
    'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'proin at efficitur est.',
    'nunc vitae consectetur nibh, at maximus risus.',
    'sed sit amet metus id ex fringilla hendrerit non sit amet mauris.'
  ];

  items.forEach((item) => {
    const itemElement = document.createElement('li');
    itemElement.innerText = item;
    itemElement.className = `${prefix}__item`;
    element.appendChild(itemElement);
  });

  return element;
};

export const Default = Template.bind();

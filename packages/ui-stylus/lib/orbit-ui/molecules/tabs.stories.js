import cx from 'classnames';

import './tabs.styl';

export default {
  title: 'Molecules/Tabs',
  argTypes: {
    activeIndex: {
      control: 'number',
      name: 'Active tab index',
      defaultValue: 1
    }
  }
};

const Template = ({ activeIndex }) => {
  const prefix = 'ui-tabs';
  const element = document.createElement('div');
  element.className = prefix;

  const tabs = ['Item 1', 'Item 2', 'Item 3'];

  tabs.forEach((tab, index) => {
    const innerElement = document.createElement('a');
    innerElement.innerText = tab;
    innerElement.className = cx(
      `${prefix}__item`,
      index === activeIndex && `${prefix}__item--active`
    );
    element.appendChild(innerElement);
  });

  return element;
};

export const Default = Template.bind();

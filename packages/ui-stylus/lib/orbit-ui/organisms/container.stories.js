import './container.styl';

export default {
  title: 'Organisms/Container'
};

const Template = () => {
  const prefix = 'ui-container';
  const element = document.createElement('div');
  element.className = prefix;
  element.style = 'border: 1px solid magenta';
  element.innerText = 'Lorem ipsum dolor sit amed';
  return element;
};

export const Default = Template.bind();

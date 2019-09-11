import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { ListGroup } from './list-group';
import { SIZES, SIZE_MEDIUM, SIZE_LARGE } from './list-group.constants';
import classNamesOverride from './list-group.stories.override-modules.css';
import classNamesImport from './list-group.stories.import-modules.styl';

const stories = storiesOf('Components/Molecules/ListGroup', module);

const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);

const items = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Proin at efficitur est.',
  'Nunc vitae consectetur nibh, at maximus risus.',
  'Sed sit amet metus id ex fringilla hendrerit non sit amet mauris.'
];

stories.add(
  'info',
  withInfo({ inline: true })(() => <ListGroup size="small" items={['Item 1', 'Item 2']} />)
);

stories.add('default', () => (
  <div style={{ padding: '1rem' }}>
    <ListGroup size={selectSize()} items={items} />
  </div>
));

stories.add('with size modifier', () => (
  <div style={{ padding: '1rem' }}>
    <ListGroup size={selectSize(SIZE_LARGE)} items={items} />
  </div>
));

stories.add('with custom render', () => (
  <div style={{ padding: '1rem' }}>
    <ListGroup
      size={selectSize()}
      as="nav"
      render={({ getListGroupItemProps }) =>
        items.map((item, index) => (
          <a key={item} href={`#${index}`} {...getListGroupItemProps()}>
            {item}
          </a>
        ))
      }
    />
  </div>
));

stories.add('with custom css-module class names', () => (
  <div style={{ padding: '1rem' }}>
    <ListGroup size={selectSize()} items={items} classNames={classNamesOverride} />
  </div>
));

stories.add('with imported css-module class names', () => (
  <div style={{ padding: '1rem' }}>
    <ListGroup size={selectSize()} items={items} classNames={classNamesImport} />
  </div>
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { ListGroup } from './list-group';
import {
  SIZES,
  SIZE_LARGE,
} from './list-group.constants';

const stories = storiesOf('Components/Molecules/ListGroup', module);

const selectSize = (size = null) => select('Size', SIZES, size);

const items = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Proin at efficitur est.',
  'Nunc vitae consectetur nibh, at maximus risus.',
  'Sed sit amet metus id ex fringilla hendrerit non sit amet mauris.',
];

stories.add('default', () => (
  <div style={{ padding: '1rem' }}>
    <ListGroup
      size={selectSize()}
      items={items}
    />
  </div>
));

stories.add('with size', () => (
  <div style={{ padding: '1rem' }}>
    <ListGroup
      size={selectSize(SIZE_LARGE)}
      items={items}
    />
  </div>
));

stories.add('with custom render', () => (
  <div style={{ padding: '1rem' }}>
    <ListGroup
      size={selectSize()}
      as="nav"
      render={({ getListGroupItemProps }) =>
          items.map((item, index) => (
            <a
              key={item}
              href={`#${index}`}
              {...getListGroupItemProps()}
            >
              {item}
            </a>
          ))
      }
    />
  </div>
));

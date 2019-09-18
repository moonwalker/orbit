/* global window */
import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Carousel } from './';

const ITEMS = Array(16).fill('');

const ItemComponent = (props, ref) => {
  const { style, index, isVisible = true, loading, ...restProps } = props;

  return (
    <div
      style={{
        background: loading ? '#eee' : 'linear-gradient(-20deg, lightpink, skyblue)',
        color: '#fff',
        fontWeight: 'bold',
        width: '200px',
        height: '240px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: index > 0 ? '12px' : 0,
        ...(!isVisible && { opacity: 0.5, pointerEvents: 'none' }),
        ...style
      }}
      ref={ref}
      {...restProps}
    >
      {index + 1}
    </div>
  );
};

const Item = React.forwardRef(ItemComponent);

const stories = storiesOf('Carousel', module);
stories.addDecorator((storyFn) => <div style={{ padding: '24px' }}>{storyFn()}</div>);

stories.add('default', () => (
  <Carousel
    items={ITEMS.map((item, index) => (
      <Item index={index} />
    ))}
  />
));

stories.add('loading', () => (
  <Carousel
    loading
    items={Array(5)
      .fill('')
      .map((item, index) => (
        <Item index={index} />
      ))}
  />
));

stories.add('with full width item', () => (
  <Carousel
    items={ITEMS.map((item, index) => (
      <Item
        index={index}
        style={{
          width: '100%'
        }}
      />
    ))}
  />
));

stories.add('with variable width item', () => (
  <Carousel
    items={ITEMS.map((item, index) => (
      <Item
        index={index}
        style={{
          width: `${(index + 1) * 5}%`
        }}
      />
    ))}
  />
));

stories.add('with custom styles', () => (
  <Carousel
    items={ITEMS.map((item, index) => (
      <Item index={index} />
    ))}
    getStyles={(defaultStyles) => ({
      ...defaultStyles,
      root: {
        ...defaultStyles.root,
        boxShadow: '0 0 10px pink'
      },
      wrapper: {
        ...defaultStyles.wrapper,
        background: 'lightpink'
      }
    })}
  />
));

const CarouselWithAsyncData = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(Array(5).fill(''));

  useEffect(() => {
    const fetchData = window.setTimeout(() => {
      setLoading(false);
      setItems(Array(20).fill(''));
    }, 3000);

    return () => {
      window.clearTimeout(fetchData);
    };
  }, []);

  return (
    <>
      <p>{`Loading: ${JSON.stringify(loading)}`}</p>
      <Carousel
        loading={loading}
        items={items.map((item, index) => (
          <Item index={index} />
        ))}
      />
    </>
  );
};

stories.add('with async data', () => <CarouselWithAsyncData />);

stories.add('with item intersection observer', () => (
  <Carousel
    itemIntersectionObserverEnabled
    items={ITEMS.map((item, index) => (
      <Item index={index} />
    ))}
  />
));

stories.add('with navigation', () => (
  <Carousel
    itemIntersectionObserverEnabled
    items={ITEMS.map((item, index) => (
      <Item index={index} />
    ))}
    renderNavigation={({ hasPrevItems, hasNextItems, showPrevItems, showNextItems }) => (
      <nav style={{ position: 'absolute', left: 0, right: 0, top: '50%' }}>
        <button
          type="button"
          style={{ position: 'absolute', left: 0, top: '50%' }}
          onClick={showPrevItems}
          disabled={!hasPrevItems}
        >
          Previous
        </button>
        <button
          type="button"
          style={{ position: 'absolute', right: 0, top: '50%' }}
          onClick={showNextItems}
          disabled={!hasNextItems}
        >
          Next
        </button>
      </nav>
    )}
  />
));

stories.add('with pagination', () => (
  <Carousel
    itemIntersectionObserverEnabled
    items={ITEMS.map((item, index) => (
      <Item index={index} />
    ))}
    renderNavigation={({ itemsVisibility, showItem }) => (
      <nav style={{ padding: '12px', textAlign: 'center' }}>
        {itemsVisibility.map((isVisible, index) => (
          <button type="button" onClick={() => showItem(index)}>
            {index + 1}
          </button>
        ))}
      </nav>
    )}
  />
));

stories.add('with lazyRender', () => (
  <>
    <div style={{ height: '100vh' }}>
      <p>Scroll down to test lazyRender</p>
    </div>
    <Carousel
      lazyRender
      items={ITEMS.map((item, index) => (
        <Item index={index} />
      ))}
    />
  </>
));

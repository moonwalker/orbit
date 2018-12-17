import React from 'react';
import { storiesOf } from '@storybook/react';
import { withMedia } from 'react-media-query-hoc';

import { Carousel } from './';

const ITEMS = Array(10).fill('');

const Item = React.forwardRef(({
  style,
  index,
  isVisible,
  loading,
  ...props
}, ref) => (
  <div
    style={{
      background: loading ? '#eee' : 'linear-gradient(315deg, #ea1c6b, #7a0ff4)',
      color: '#fff',
      fontWeight: 'bold',
      width: '220px',
      height: '260px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '12px',
      ...style
    }}
    ref={ref}
    {...props}
  >
    {index + 1}
  </div>
));

const Page = ({ style, ...props }) => (
  <div
    style={{
      height: '100vh',
      background: '#eee',
      display: 'flex',
      alignItems: 'center',
      ...style
    }}
    {...props}
  />
);

const stories = storiesOf('UI/Carousel', module);

stories.addDecorator(storyFn => (
  <div style={{ width: '80%', maxWidth: '1024px' }}>
    {storyFn()}
  </div>
));

stories.add('default', () => (
  <Carousel>
    {ITEMS.map((item, index) => <Item index={index} />)}
  </Carousel>
));

stories.add('with full width item', () => (
  <Carousel>
    {ITEMS.map((item, index) => (
      <Item
        index={index}
        style={{
          width: '100%'
        }}
      />
    ))}
  </Carousel>
));

stories.add('with variable width item', () => (
  <Carousel>
    {ITEMS.map((item, index) => (
      <Item
        index={index}
        style={{
          width: `${Math.random() * 100}%`
        }}
      />
    ))}
  </Carousel>
));

class CarouselWithAsyncItems extends React.Component {
  state = {
    items: Array(10).fill(''),
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        items: ITEMS,
        loading: false
      });
    }, 3 * 1000);
  }

  render() {
    return (
      <Carousel loading={this.state.loading}>
        {this.state.items.map((item, index) => {
          const key = index;

          return (
            <Item key={key} index={index} />
          );
        })}
      </Carousel>
    );
  }
}

stories.add('with async items', () => (
  <CarouselWithAsyncItems />
));

const renderNavigation = navProps => (
  <div style={{ position: 'absolute', left: 0, top: '100%' }}>
    <button
      type="button"
      onClick={navProps.showPrevItems}
    >
      Prev
    </button>
    <button
      type="button"
      onClick={navProps.showNextItems}
    >
      Next
    </button>
  </div>
);

stories.add('modifier:navigation', () => (
  <Carousel
    renderNavigation={renderNavigation}
    itemIntersectionObserverEnabled
  >
    {ITEMS.map((item, index) => <Item index={index} />)}
  </Carousel>
));

stories.add('modifier:navigation + snap scrolling', () => (
  <Carousel
    renderNavigation={renderNavigation}
    snapScrolling
    itemIntersectionObserverEnabled
  >
    {ITEMS.map((item, index) => <Item index={index} />)}
  </Carousel>
));

const renderNavigationAndPagination = navProps => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }}
  >
    <div>
      <button
        type="button"
        onClick={navProps.showPrevItems}
      >
        Prev
      </button>
      <button
        type="button"
        onClick={navProps.showNextItems}
      >
        Next
      </button>
    </div>
    <div>
      {navProps.items.map((item, index) => {
        const key = index;

        return (
          <button
            type="button"
            key={key}
            style={{
              ...(item.isVisible ? { fontWeight: 'bold' } : {})
            }}
            onClick={() => navProps.showItem(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  </div>
);

stories.add('modifier:navigation + pagination', () => (
  <Carousel
    renderNavigation={renderNavigationAndPagination}
    itemIntersectionObserverEnabled
  >
    {ITEMS.map((item, index) => (
      <Item
        index={index}
        style={{
          width: '100%'
        }}
      />
    ))}
  </Carousel>
));

stories.add('modifier:itemIntersectionObserverEnabled', () => (
  <React.Fragment>
    <Page style={{ background: '#eee' }}>
      <Carousel itemIntersectionObserverEnabled>
        {ITEMS.map((item, index) => (
          <Item index={index} />
        ))}
      </Carousel>
    </Page>
    <Page style={{ background: '#ddd', }}>
      <Carousel itemIntersectionObserverEnabled>
        {ITEMS.map((item, index) => (
          <Item index={index} />
        ))}
      </Carousel>
    </Page>
  </React.Fragment>
));

stories.add('modifier:itemIntersectionObserverEnabled + custom offCanvasClassName', () => (
  <Carousel itemIntersectionObserverEnabled itemOffCanvasClassName="offCanvasClassName">
    {ITEMS.map((item, index) => (
      <Item index={index} />
    ))}
  </Carousel>
));

const CarouselWithMedia = withMedia(React.forwardRef(({ media }) => (
  <React.Fragment>
    <p>intersection observer: {media.tablet.toString()}</p>
    <Carousel itemIntersectionObserverEnabled={media.tablet}>
      {ITEMS.map((item, index) => {
        const key = index;
        return (
          <Item key={key} index={index} />
        );
      })}
    </Carousel>
  </React.Fragment>
)));

stories.add('modifier:itemIntersectionObserverEnabled + media', () => <CarouselWithMedia />);

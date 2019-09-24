import React from 'react';
import PropTypes from 'prop-types';

import { CarouselItem } from './carousel-item';
import { CAROUSEL_ITEMS_INITIAL_COUNT } from './carousel.constants';

const getDefaultStyles = ({ loading }) => ({
  root: {
    with: '100%',
    position: 'relative',
    ...(loading && {
      pointerEvents: 'none',
      overflow: 'hidden'
    })
  },
  outerWrapper: {
    overflow: 'hidden'
  },
  wrapper: {
    width: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    WebkitOverflowScrolling: 'touch',
    scrollSnapType: 'x mandatory',
    paddingBottom: '24px',
    marginBottom: '-24px'
  },
  items: {
    display: 'inline-flex',
    // set the flex container 100% to allow items to stretch full width
    width: '100%'
  },
  item: {
    flex: '0 0 auto'
  }
});

export const Carousel = (props) => {
  const {
    className,
    getStyles,

    loading,
    /*
    snapScrolling,
    hasItemsScrollingIntoView,
    */
    wrapperRef,

    addItem,
    removeItem,

    itemsVisibility,
    itemIntersectionObserverEnabled,

    hasPrevItems,
    hasNextItems,
    showItem,
    showNextItems,
    showPrevItems,
    renderNavigation,

    lazyRender,
    inViewport,

    items
  } = props;

  const defaultStyles = getDefaultStyles({ loading });
  const styles = getStyles(defaultStyles, { loading });

  // Use enhanced (IntersectionObserver) item component when in viewport prop is enabled
  const ItemComponent = itemIntersectionObserverEnabled
    ? CarouselItem
    : ({ children: itemChild, style: itemStyle, ...restItemProps }) =>
        React.cloneElement(itemChild, {
          style: {
            ...itemStyle,
            ...itemChild.props.style
          },
          ...restItemProps
        });

  // When lazyRender, render just the minimum amount initially and the rest when in viewport
  const childItems =
    lazyRender && !inViewport ? items.slice(0, CAROUSEL_ITEMS_INITIAL_COUNT) : items;

  return (
    <div className={className} style={styles.root}>
      <div style={styles.outerWrapper}>
        <div style={styles.wrapper} ref={wrapperRef}>
          <div style={styles.items}>
            {childItems.map((item, index) => {
              const key = index;

              return (
                <ItemComponent
                  key={key}
                  index={index}
                  isVisible={itemsVisibility[index]}
                  style={styles.item}
                  loading={loading}
                  addItem={addItem}
                  removeItem={removeItem}
                >
                  {item}
                </ItemComponent>
              );
            })}
          </div>
        </div>
      </div>

      {renderNavigation({
        hasPrevItems,
        hasNextItems,
        showItem,
        showPrevItems,
        showNextItems,

        itemsVisibility
      })}
    </div>
  );
};

Carousel.defaultProps = {
  className: '',
  loading: false,
  getStyles: (styles) => styles,
  // snapScrolling: false,

  renderNavigation: () => null
};

Carousel.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** Get styles render prop */
  getStyles: PropTypes.func,

  /** Loading flag */
  loading: PropTypes.bool,

  /** snap scrolling flag */
  // snapScrolling: PropTypes.bool,

  /** scrollIntoView operation is in progress */
  // hasItemsScrollingIntoView: PropTypes.bool.isRequired,

  /** Carousel wrapper ref */
  wrapperRef: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types

  /** Carousel itemsVisibility addItem handler */
  addItem: PropTypes.func.isRequired,

  /** Carousel itemsVisibility removeItem handler */
  removeItem: PropTypes.func.isRequired,

  /** Navigation render prop */
  renderNavigation: PropTypes.func,

  /** Items visibility data */
  itemsVisibility: PropTypes.arrayOf(PropTypes.bool).isRequired,

  /** itemIntersectionObserverEnabled flag */
  itemIntersectionObserverEnabled: PropTypes.bool.isRequired,

  /** Carousel prev itemsVisibility flag */
  hasPrevItems: PropTypes.bool.isRequired,

  /** Carousel next itemsVisibility flag */
  hasNextItems: PropTypes.bool.isRequired,

  /** Carousel show item handler */
  showItem: PropTypes.func.isRequired,

  /** Carousel show prev itemsVisibility handler */
  showPrevItems: PropTypes.func.isRequired,

  /** Carousel show next itemsVisibility handler */
  showNextItems: PropTypes.func.isRequired,

  /** Carousel lazyRender flag */
  lazyRender: PropTypes.bool.isRequired,

  /** Carouse inViewport flag */
  inViewport: PropTypes.bool.isRequired,

  /** Items content */
  items: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

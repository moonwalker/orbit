import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CarouselItem } from './carousel-item.component';
import css from './carousel.styl';

const ITEMS_COUNT = 5;

export const Carousel = (props) => {
  const {
    className,

    loading,
    snapScrolling,
    hasItemsScrollingIntoView,
    wrapperRef,

    addItem,
    removeItem,

    items,
    itemIntersectionObserverEnabled,
    getItemIntersectionObserver,
    itemClassName,
    itemOffCanvasClassName,
    itemsClassName,

    hasPrevItems,
    hasNextItems,
    showItem,
    showNextItems,
    showPrevItems,
    renderNavigation,

    lazyLoaded
  } = props;

  const rootClassName = cx(
    css.root,
    className,
    loading && css.loading,
    itemIntersectionObserverEnabled && css.itemIntersectionObserverEnabled,
    /*
     * iOS is reseting the scroll position when changing snap mode
     * The modifiers are disabled until solved
     *
     * snapScrolling && css.snapScrolling,
     * hasItemsScrollingIntoView && css.hasItemsScrollingIntoView
     */
  );

  // Use enhanced (IntersectionObserver) item component when in viewport prop is enabled
  const ItemComponent = itemIntersectionObserverEnabled ?
    CarouselItem :
    ({ children, className: itemComponentClassName }) => React.cloneElement(children, {
      className: cx(children.props.className, itemComponentClassName)
    });

  // When lazyLoading, render just the minimum amount of items
  const children = lazyLoaded ? props.children : props.children.slice(0, ITEMS_COUNT);

  return (
    <div className={rootClassName}>
      <div className={css.outerWrapper}>
        <div className={css.wrapper} ref={wrapperRef}>
          <div className={cx(css.items, itemsClassName)}>
            {children.map((item, index) => {
              const key = index;

              return (
                <ItemComponent
                  key={key}
                  index={index}
                  isVisible={items[index] && items[index].isVisible}

                  className={cx(css.item, itemClassName)}
                  offCanvasClassName={itemOffCanvasClassName}

                  loading={loading}

                  addItem={addItem}
                  removeItem={removeItem}
                  getIntersectionObserver={getItemIntersectionObserver}
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

        items,
        className: css.navigation
      })}
    </div>
  );
};

Carousel.defaultProps = {
  className: '',
  loading: false,
  snapScrolling: false,

  itemClassName: '',
  itemOffCanvasClassName: css.itemOffCanvas,
  itemsClassName: '',

  renderNavigation: () => null,
};

Carousel.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** Loading flag */
  loading: PropTypes.bool,

  /** snap scrolling flag */
  snapScrolling: PropTypes.bool,

  /** scrollIntoView operation is in progress */
  hasItemsScrollingIntoView: PropTypes.bool.isRequired,

  /** Carousel wrapper ref */
  wrapperRef: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types

  /** item class name */
  itemClassName: PropTypes.string,

  /** item offCanvas class name */
  itemOffCanvasClassName: PropTypes.string,

  /** items class name */
  itemsClassName: PropTypes.string,


  /** Carousel items addItem handler */
  addItem: PropTypes.func.isRequired,

  /** Carousel items removeItem handler */
  removeItem: PropTypes.func.isRequired,


  /** Navigation render prop */
  renderNavigation: PropTypes.func,

  /** itemIntersectionObserverEnabled flag */
  itemIntersectionObserverEnabled: PropTypes.bool.isRequired,

  /** Carousel prev items flag */
  hasPrevItems: PropTypes.bool.isRequired,

  /** Carousel next items flag */
  hasNextItems: PropTypes.bool.isRequired,

  /** Carousel show item handler */
  showItem: PropTypes.func.isRequired,


  /** Carousel show prev items handler */
  showPrevItems: PropTypes.func.isRequired,

  /** Carousel show next items handler */
  showNextItems: PropTypes.func.isRequired,

  /** Carousel lazyLoaded flag */
  lazyLoaded: PropTypes.bool.isRequired,
};

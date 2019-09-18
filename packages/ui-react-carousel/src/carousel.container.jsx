/* global window, IntersectionObserver */
import React from 'react';
import PropTypes from 'prop-types';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

export const scrollTo = (element, options = {}) =>
  scrollIntoView(element, {
    behavior: 'smooth',
    block: 'start',
    ...options
  });

const INTERSECTION_OBSERVER_TRESHOLD = 0.5;

export const carouselContainer = (BaseComponent) => {
  class CarouselContainer extends React.Component {
    wrapperRef = {};

    // Items IntersectionObservers
    itemsObservers = {};

    // Items DOM references
    itemsRefs = {};

    constructor(props) {
      super(props);

      this.wrapperRef = React.createRef();
      this.state = {
        itemsVisibility: [],
        inViewport: false,
        hasItemsScrollingIntoView: false
      };
    }

    componentDidMount() {
      this.startIntersectionObserver();
    }

    componentWillUnmount() {
      [this.intersectionObserver, ...Object.values(this.itemsObservers)].forEach(
        (intersectionObserver) => intersectionObserver && intersectionObserver.disconnect()
      );
    }

    createItemIntersectionObserver = (itemIndex, itemRef) => {
      const { itemIntersectionObserverEnabled, itemIntersectionThreshold } = this.props;

      // Skip If item intersection is not enabled
      if (!itemIntersectionObserverEnabled) {
        return;
      }

      const itemIntersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => this.updateItem(itemIndex, entry.isIntersecting));
        },
        {
          root: this.wrapperRef.current,
          threshold: itemIntersectionThreshold
        }
      );

      this.itemsObservers[itemIndex] = itemIntersectionObserver;

      window.requestAnimationFrame(() => {
        itemIntersectionObserver.observe(itemRef.current);
      });
    };

    /*
     * Detect in/out viewport for the carousel
     */
    startIntersectionObserver = () => {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting }) => this.toggleInViewport(isIntersecting));
      });

      window.requestAnimationFrame(() => {
        this.intersectionObserver.observe(this.wrapperRef.current);
      });
    };

    toggleInViewport = (nextInViewport) => {
      const { inViewport } = this.state;

      if (nextInViewport === inViewport) {
        return;
      }

      this.setState({ inViewport: nextInViewport });

      const { onViewportIn, onViewportOut } = this.props;

      if (nextInViewport === true && onViewportIn) {
        onViewportIn();
      }

      if (nextInViewport === false && onViewportOut) {
        onViewportOut();
      }
    };

    scrollItem = (element, inlineElement) => {
      // @NOTE this can cause race conditions when we have another scroll in progress
      this.setState({ hasItemsScrollingIntoView: true }, () => {
        scrollTo(element, {
          block: 'nearest',
          inline: inlineElement
        })
          .then(() => {
            this.setState({
              hasItemsScrollingIntoView: false
            });
          })
          .catch((err) => {
            console.error(err); // eslint-disable-line no-console
          });
      });
    };

    showNextItems = () => {
      const { itemsVisibility } = this.state;
      const reversedVisibleItems = [...itemsVisibility].reverse();
      const nextOffCanvasItemId =
        itemsVisibility.length - reversedVisibleItems.findIndex((item) => item);
      const nextOffCanvasItem = this.itemsRefs[nextOffCanvasItemId].current;

      if (nextOffCanvasItem) {
        this.scrollItem(nextOffCanvasItem, 'start');
      }
    };

    showPrevItems = () => {
      const { itemsVisibility } = this.state;
      const prevOffCanvasItemId = itemsVisibility.findIndex((item) => item) - 1;
      const prevOffCanvasItem = this.itemsRefs[prevOffCanvasItemId].current;

      if (prevOffCanvasItem) {
        this.scrollItem(prevOffCanvasItem, 'end');
      }
    };

    showItem = (id) => {
      const itemRef = this.itemsRefs[id];
      this.scrollItem(itemRef.current, 'start');
    };

    addItem = (itemIndex, ref, isVisible = true) => {
      this.itemsRefs[itemIndex] = ref;

      this.setState(({ itemsVisibility }) => ({
        itemsVisibility: [
          ...itemsVisibility.slice(0, itemIndex),
          isVisible,
          ...itemsVisibility.slice(itemIndex + 1)
        ]
      }));

      this.createItemIntersectionObserver(itemIndex, ref);
    };

    updateItem = (itemIndex, isVisible) => {
      const { itemsVisibility } = this.state;

      // Ignore changes if the value is the same
      // Avoid calling setState at any cost especially to avoid multiple re-renders during the
      // insertion of the itemsVisibilityVisibility, event there might be some inconsistencies
      if (itemsVisibility[itemIndex] === isVisible) {
        return;
      }

      this.setState(({ itemsVisibility: prevItemsVisibility }) => ({
        itemsVisibility: [
          ...prevItemsVisibility.slice(0, itemIndex),
          isVisible,
          ...prevItemsVisibility.slice(itemIndex + 1)
        ]
      }));
    };

    removeItem = (itemIndex) => {
      this.setState(({ itemsVisibility }) => {
        this.itemsObservers[itemIndex].disconnect();
        this.itemsObservers[itemIndex] = null;
        this.itemsRefs[itemIndex] = null;

        return {
          itemsVisibility: [
            ...itemsVisibility.slice(0, itemIndex),
            ...itemsVisibility.slice(itemIndex + 1)
          ]
        };
      });
    };

    render() {
      const { itemsVisibility, inViewport, hasItemsScrollingIntoView } = this.state;
      const { itemIntersectionObserverEnabled, lazyRender } = this.props;

      const hasPrevItems = Boolean(
        itemIntersectionObserverEnabled &&
          itemsVisibility &&
          itemsVisibility.length &&
          itemsVisibility[0] === false
      );
      const hasNextItems = Boolean(
        itemIntersectionObserverEnabled &&
          itemsVisibility &&
          itemsVisibility.length &&
          itemsVisibility[itemsVisibility.length - 1] === false
      );

      return (
        <BaseComponent
          {...this.props}
          wrapperRef={this.wrapperRef}
          itemsVisibility={itemsVisibility}
          inViewport={inViewport}
          hasItemsScrollingIntoView={hasItemsScrollingIntoView}
          lazyRender={lazyRender}
          hasPrevItems={hasPrevItems}
          hasNextItems={hasNextItems}
          showItem={this.showItem}
          showNextItems={this.showNextItems}
          showPrevItems={this.showPrevItems}
          addItem={this.addItem}
          removeItem={this.removeItem}
        />
      );
    }
  }

  CarouselContainer.propTypes = {
    lazyRender: PropTypes.bool,
    onViewportIn: PropTypes.func,
    onViewportOut: PropTypes.func,
    itemIntersectionObserverEnabled: PropTypes.bool,
    itemIntersectionThreshold: PropTypes.number
  };

  CarouselContainer.defaultProps = {
    lazyRender: false,
    onViewportIn: null,
    onViewportOut: null,
    itemIntersectionObserverEnabled: false,
    itemIntersectionThreshold: INTERSECTION_OBSERVER_TRESHOLD
  };

  return CarouselContainer;
};

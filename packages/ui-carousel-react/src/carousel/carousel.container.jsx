/* global IntersectionObserver */
import React from 'react';
import PropTypes from 'prop-types';

// import { scrollTo } from '../../utils';
const scrollTo = () => {};

const INTERSECTION_OBSERVER_TRESHOLD = 0.5;

export const carouselContainer = BaseComponent => class CarouselContainer extends React.Component {
    static propTypes = {
      itemIntersectionObserverEnabled: PropTypes.bool,
      itemIntersectionThreshold: PropTypes.number,
    }

    static defaultProps = {
      itemIntersectionObserverEnabled: false,
      itemIntersectionThreshold: INTERSECTION_OBSERVER_TRESHOLD,
    }

    constructor(props) {
      super(props);
      this.wrapperRef = React.createRef();
    }

    state = {
      items: [],
      lazyLoaded: false,
      inViewport: false,
      hasItemsScrollingIntoView: false,
      mounted: false,
    }

    componentDidMount() {
      this.startIntersectionObserver();
      this.createItemIntersectionObserver();

      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        mounted: true,
      });
    }

    componentWillUnmount() {
      if (this.intersectionObserver) {
        this.intersectionObserver.unobserve(this.wrapperRef.current);
      }
    }

    getItemIntersectionObserver = () => this.itemIntersectionObserver;

    createItemIntersectionObserver = () => {
      const {
        itemIntersectionObserverEnabled,
        itemIntersectionThreshold,
      } = this.props;

      if (!itemIntersectionObserverEnabled) {
        return;
      }

      this.itemIntersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const isVisible = Boolean(entry.intersectionRatio >= itemIntersectionThreshold);
          const targetIndex = this.state.items.findIndex(item => item.ref && (item.ref.current === entry.target));

          if (targetIndex !== 'undefined' && targetIndex >= 0) {
            this.updateItem(targetIndex, isVisible);
          }
        });
      }, {
        root: this.wrapperRef.current,
        threshold: itemIntersectionThreshold,
      });
    }

    /*
     * Item itersection observer
     * Will check the intersection between each item and the carousel container
     */
    itemIntersectionObserver = null

    /*
     * Lazy rendering for the rest of the items when the component is in view
     */
    startIntersectionObserver() {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const inViewport = Boolean(entry.intersectionRatio > 0);
          this.setState({
            inViewport,
            lazyLoaded: this.state.lazyLoaded || inViewport,
          });
        });
      });

      if (this.wrapperRef.current) {
        this.intersectionObserver.observe(this.wrapperRef.current);
      }
    }

    wrapperRef = {}

    scrollItem = (element, inlineElement) => {
      // @NOTE this can cause race conditions when we have another scroll in progress
      this.setState({ hasItemsScrollingIntoView: true }, () => {
        scrollTo(element, {
          block: 'nearest',
          inline: inlineElement,
        }).then(() => {
          this.setState({
            hasItemsScrollingIntoView: false,
          });
        }).catch((err) => {
          console.error(err); // eslint-disable-line no-console
        });
      });
    }

    showNextItems = () => {
      const { items } = this.state;
      const reversedVisibleItems = [...items].reverse();
      const nextOffCanvasItemId = items.length
        - reversedVisibleItems.findIndex(i => i.isVisible);
      const nextOffCanvasItem = items[nextOffCanvasItemId].ref.current;

      if (nextOffCanvasItem) {
        this.scrollItem(nextOffCanvasItem, 'start');
      }
    }

    showPrevItems = () => {
      const { items } = this.state;
      const prevOffCanvasItemId = items.findIndex(item => item.isVisible === true) - 1;
      const prevOffCanvasItem = items[prevOffCanvasItemId].ref.current;

      if (prevOffCanvasItem) {
        this.scrollItem(prevOffCanvasItem, 'end');
      }
    }

    showItem = (id) => {
      const item = this.state.items[id];

      this.scrollItem(item.ref.current, 'start');
    }

    addItem = (newItem) => {
      this.setState(({ items }) => ({
        items: [...items, newItem],
      }));
    }

    updateItem = (index, isVisible) => {
      this.setState(({ items }) => ({
        items: [
          ...items.slice(0, index),
          {
            ...items[index],
            isVisible,
          },
          ...items.slice(index + 1),
        ],
      }));
    }

    removeItem = (index) => {
      this.setState(({ items }) => ({
        items: [
          ...items.slice(0, index),
          ...items.slice(index + 1),
        ],
      }));
    }

    render() {
      const { items, inViewport, hasItemsScrollingIntoView } = this.state;
      const { itemIntersectionObserverEnabled } = this.props;

      const hasPrevItems = Boolean(itemIntersectionObserverEnabled
        && items
        && items.length
        && !items[0].isVisible);
      const hasNextItems = Boolean(itemIntersectionObserverEnabled
        && items
        && items.length
        && !items[items.length - 1].isVisible);

      return (
        <BaseComponent
          {...this.props}

          wrapperRef={this.wrapperRef}
          inViewport={inViewport}
          hasItemsScrollingIntoView={hasItemsScrollingIntoView}

          items={items}

          hasPrevItems={hasPrevItems}
          hasNextItems={hasNextItems}
          showItem={this.showItem}
          showNextItems={this.showNextItems}
          showPrevItems={this.showPrevItems}

          addItem={this.addItem}
          updateItem={this.updateItem}
          removeItem={this.removeItem}

          lazyLoaded={this.state.lazyLoaded}
          getItemIntersectionObserver={this.getItemIntersectionObserver}
        />
      );
    }
};

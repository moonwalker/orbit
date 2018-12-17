import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class CarouselItemComponent extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    className: PropTypes.string,
    offCanvasClassName: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    getIntersectionObserver: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.props.addItem({
      isVisible: true,
      ref: this.ref,
    });
    this.startObserver();
  }

  componentWillUnmount() {
    const { intersectionObserver, removeItem, index } = this.props;

    if (intersectionObserver) {
      intersectionObserver.unobserve(this.ref.current);
    }

    removeItem(index);
  }

  ref={}

  startObserver = () => {
    const { getIntersectionObserver } = this.props;

    // @HACK - Start the observer later to make sure we have the parent observer
    setTimeout(() => {
      const observer = getIntersectionObserver();

      if (this.ref.current) {
        observer.observe(this.ref.current);
      }
    }, 200);
  }

  render() {
    const {
      children,
      loading,
      className,
      isVisible,
      offCanvasClassName,
    } = this.props;

    const output = React.cloneElement(children, {
      ref: this.ref,
      isVisible,
      loading,
      className: cx(children.props.className, className, !isVisible && offCanvasClassName),
    });

    return output;
  }
}

export const CarouselItem = CarouselItemComponent;

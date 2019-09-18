import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { CAROUSEL_ITEMS_INITIAL_COUNT } from './carousel.constants';

export const CarouselItem = (props) => {
  const { index, addItem, removeItem, children, ...restProps } = props;

  const ref = useRef();

  useEffect(() => {
    addItem(index, ref, index < CAROUSEL_ITEMS_INITIAL_COUNT);

    return () => {
      removeItem(index);
    };
  }, []);

  return React.cloneElement(children, {
    ...restProps,
    ...children.props,
    ref
  });
};

CarouselItem.propTypes = {
  index: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

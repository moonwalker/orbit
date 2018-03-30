import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  UI_NAME,
  SIZES,
  SIZE_MEDIUM,
} from './input.constants';

export const Input = (props) => {
  const {
    className,
    size,
    ...restProps
  } = props;

  const rootClassName = cx(UI_NAME, className, {
    [`${UI_NAME}--${size}`]: size,
  });

  return (
    <input
      className={rootClassName}
      {...restProps}
    />
  );
};

Input.defaultProps = {
  className: '',
  size: SIZE_MEDIUM,
};

Input.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* Size type */
  size: PropTypes.oneOf(SIZES),
};

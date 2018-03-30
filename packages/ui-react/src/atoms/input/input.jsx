import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  UI_NAME,
  SIZES,
  VALID,
  INVALID,
} from './input.constants';

export const Input = (props) => {
  const {
    className,
    size,
    valid,
    ...restProps
  } = props;

  const rootClassName = cx(UI_NAME, className, {
    [`${UI_NAME}--${size}`]: size,
    [`${UI_NAME}--${VALID}`]: valid === true,
    [`${UI_NAME}--${INVALID}`]: valid === false,
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
  size: null,
  valid: null,
};

Input.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* Size type */
  size: PropTypes.oneOf(SIZES),

  /* Valid boolean value */
  valid: PropTypes.bool,
};

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './input.constants';
import { CLASS_NAMES } from './input.class-names';

export const Input = (props) => {
  const {
    className,
    size,
    valid,
    ...restProps
  } = props;

  const rootClassName = cx(CLASS_NAMES.root, className, {
    [CLASS_NAMES[size]]: size,
    [CLASS_NAMES.valid]: valid === true,
    [CLASS_NAMES.invalid]: valid === false,
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

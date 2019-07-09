import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  SIZES,
  SIZE_DEFAULT,
} from './input.constants';
import { CLASS_NAMES } from './input.class-names';

export const Input = React.forwardRef((props, ref) => {
  const {
    className,
    classNames,
    size,
    valid,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size,
    [classNames.valid]: valid === true,
    [classNames.invalid]: valid === false,
  });

  return (
    <input
      className={rootClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Input.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  size: SIZE_DEFAULT,
  valid: null,
};

Input.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string,
    valid: PropTypes.string,
    invalid: PropTypes.string,
  }),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES),

  /** Valid boolean value */
  valid: PropTypes.bool,
};

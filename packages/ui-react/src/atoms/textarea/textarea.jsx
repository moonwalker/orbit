import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './textarea.constants';
import { CLASS_NAMES } from './textarea.class-names';

export const Textarea = (props) => {
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
    <textarea
      className={rootClassName}
      {...restProps}
    />
  );
};

Textarea.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  size: null,
  valid: null,
};

Textarea.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  /* Size type */
  size: PropTypes.oneOf(SIZES),

  /* Valid boolean value */
  valid: PropTypes.bool,
};

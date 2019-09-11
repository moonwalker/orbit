import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES, SIZE_MEDIUM } from './textarea.constants';
import { CLASS_NAMES } from './textarea.class-names';

export const Textarea = (props) => {
  const { className, classNames, size, valid, ...restProps } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size,
    [classNames.valid]: valid === true,
    [classNames.invalid]: valid === false
  });

  return <textarea className={rootClassName} {...restProps} />;
};

Textarea.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  size: SIZE_MEDIUM,
  valid: null
};

Textarea.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string,
    valid: PropTypes.string,
    invalid: PropTypes.string
  }),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES),

  /** Valid boolean value */
  valid: PropTypes.bool
};

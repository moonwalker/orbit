import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { KINDS, KIND_DEFAULT, SIZES, SIZE_MEDIUM } from './alert.constants';
import { CLASS_NAMES } from './alert.class-names';

export const Alert = (props) => {
  const { className, classNames, as: Component, kind, size, outline, ...restProps } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[kind]]: kind,
    [classNames[size]]: size,
    [classNames.outline]: outline,
    [classNames[`outline--${size}`]]: outline,
    [classNames[`outline--${kind}`]]: outline
  });

  return <Component className={rootClassName} {...restProps} />;
};

Alert.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  as: 'div',
  kind: KIND_DEFAULT,
  size: SIZE_MEDIUM,
  outline: false
};

Alert.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string,
    outline: PropTypes.string
  }),

  /** Render tag or component */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** Kind modifier name */
  kind: PropTypes.oneOf(KINDS),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES),

  /** Outline flag */
  outline: PropTypes.bool
};

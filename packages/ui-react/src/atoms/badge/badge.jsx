import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { KINDS, KIND_DEFAULT, SIZES, SIZE_MEDIUM } from './badge.constants';
import { CLASS_NAMES } from './badge.class-names';

export const Badge = (props) => {
  const { className, classNames, as: Component, kind, size, ...restProps } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[kind]]: kind,
    [classNames[size]]: size
  });

  return <Component className={rootClassName} {...restProps} />;
};

Badge.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  as: 'span',
  kind: KIND_DEFAULT,
  size: SIZE_MEDIUM
};

Badge.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string
  }),

  /** Render tag or component */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** Kind modifier name */
  kind: PropTypes.oneOf(KINDS),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES)
};

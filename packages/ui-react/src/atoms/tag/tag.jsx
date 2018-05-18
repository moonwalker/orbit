import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  KINDS,
  KIND_DEFAULT,
  SIZES,
  SIZE_MEDIUM,
} from './tag.constants';
import { CLASS_NAMES } from './tag.class-names';

export const Tag = (props) => {
  const {
    className,
    classNames,
    as: Component,
    kind,
    size,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[kind]]: kind,
    [classNames[size]]: size,
  });

  return (
    <Component
      className={rootClassName}
      {...restProps}
    />
  );
};

Tag.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  as: 'span',
  kind: KIND_DEFAULT,
  size: SIZE_MEDIUM,
};

Tag.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string,
  }),

  /** Render tag or component */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Kind modifier name */
  kind: PropTypes.oneOf(KINDS),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES),
};

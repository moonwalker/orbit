import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './spinner.constants';
import { CLASS_NAMES } from './spinner.class-names';

export const Spinner = (props) => {
  const {
    className,
    classNames,
    size,
  } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size,
  });

  return (
    <span className={rootClassName} />
  );
};

Spinner.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  size: null,
};

Spinner.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string,
  }),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES),
};

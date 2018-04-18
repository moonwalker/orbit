import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './spinner.constants';
import { CLASS_NAMES } from './spinner.class-names';

export const Spinner = (props) => {
  const {
    className,
    size,
  } = props;

  const rootClassName = cx(CLASS_NAMES.root, className, {
    [CLASS_NAMES[size]]: size,
  });

  return (
    <span className={rootClassName} />
  );
};

Spinner.defaultProps = {
  className: '',
  size: null,
};

Spinner.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* Size type */
  size: PropTypes.oneOf(SIZES),
};

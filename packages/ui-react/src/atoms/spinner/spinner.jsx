import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  UI_NAME,
  SIZES,
} from './spinner.constants';

export const Spinner = (props) => {
  const {
    className,
    size,
  } = props;

  const rootClassName = cx(UI_NAME, className, {
    [`${UI_NAME}--${size}`]: size,
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

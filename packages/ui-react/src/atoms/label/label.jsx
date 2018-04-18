import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './label.constants';
import { CLASS_NAMES } from './label.class-names';

export const Label = (props) => {
  const {
    className,
    size,
    children,
    ...restProps
  } = props;

  const rootClassName = cx(CLASS_NAMES.root, className, {
    [CLASS_NAMES[size]]: size,
  });

  /* eslint-disable jsx-a11y/label-has-for */
  return (
    <label
      className={rootClassName}
      {...restProps}
    >
      {children}
    </label>
  );
  /* eslint-enable jsx-a11y/label-has-for */
};

Label.defaultProps = {
  className: '',
  size: null,
  children: null,
};

Label.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* Size type */
  size: PropTypes.oneOf(SIZES),

  /* Content */
  children: PropTypes.node,
};

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  UI_NAME,
  SIZES,
} from './label.constants';

export const Label = (props) => {
  const {
    className,
    size,
    children,
    ...restProps
  } = props;

  const rootClassName = cx(UI_NAME, className, {
    [`${UI_NAME}--${size}`]: size,
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

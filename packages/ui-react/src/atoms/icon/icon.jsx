import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  UI_NAME,
  SIZES,
} from './icon.constants';

export const Icon = (props) => {
  const {
    className,
    size,
    name,
    ...restProps
  } = props;

  const rootClassName = cx(UI_NAME, className, {
    [`${UI_NAME}--${size}`]: size,
  });

  return (
    <i
      className={rootClassName}
      {...restProps}
    >
      {name}
    </i>
  );
};

Icon.defaultProps = {
  className: '',
  size: null,
};

Icon.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* Icon name */
  name: PropTypes.string.isRequired,

  /* Size type */
  size: PropTypes.oneOf(SIZES),
};

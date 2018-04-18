import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './icon.constants';
import { CLASS_NAMES } from './icon.class-names';

export const Icon = (props) => {
  const {
    className,
    size,
    name,
    ...restProps
  } = props;

  const rootClassName = cx(CLASS_NAMES.root, className, {
    [CLASS_NAMES[size]]: size,
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

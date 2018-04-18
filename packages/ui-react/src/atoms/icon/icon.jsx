import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './icon.constants';
import { CLASS_NAMES } from './icon.class-names';

export const Icon = (props) => {
  const {
    className,
    classNames,
    size,
    name,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size,
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
  classNames: CLASS_NAMES,
  size: null,
};

Icon.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  /* Icon name */
  name: PropTypes.string.isRequired,

  /* Size type */
  size: PropTypes.oneOf(SIZES),
};

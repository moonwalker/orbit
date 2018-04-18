import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './label.constants';
import { CLASS_NAMES } from './label.class-names';

export const Label = (props) => {
  const {
    className,
    classNames,
    size,
    children,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size,
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
  classNames: CLASS_NAMES,
  size: null,
  children: null,
};

Label.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  /* Size type */
  size: PropTypes.oneOf(SIZES),

  /* Content */
  children: PropTypes.node,
};

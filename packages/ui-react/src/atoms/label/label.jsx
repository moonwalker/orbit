import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES, SIZE_MEDIUM } from './label.constants';
import { CLASS_NAMES } from './label.class-names';

export const Label = (props) => {
  const { className, classNames, size, children, ...restProps } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size
  });

  /* eslint-disable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
  return (
    <label className={rootClassName} {...restProps}>
      {children}
    </label>
  );
  /* eslint-enable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
};

Label.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  size: SIZE_MEDIUM,
  children: null
};

Label.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string
  }),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES),

  /** Inner content */
  children: PropTypes.node
};

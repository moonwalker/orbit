import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CLASS_NAMES } from './dropdown.class-names';

export const Dropdown = (props) => {
  const {
    className,
    classNames,
    children,
  } = props;

  const rootClassName = cx(classNames.root, className);

  return (
    <div className={rootClassName}>
      {children}
    </div>
  );
};

Dropdown.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  children: null,
};

Dropdown.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string,
  }),

  /** Inner content */
  children: PropTypes.node,
};

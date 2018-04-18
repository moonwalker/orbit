import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CLASS_NAMES } from './dropdown.class-names';

export const Dropdown = (props) => {
  const {
    className,
    children,
  } = props;

  const rootClassName = cx(CLASS_NAMES.root, className);

  return (
    <div className={rootClassName}>
      {children}
    </div>
  );
};

Dropdown.defaultProps = {
  className: '',
  children: null,
};

Dropdown.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* Inner content */
  children: PropTypes.node,
};

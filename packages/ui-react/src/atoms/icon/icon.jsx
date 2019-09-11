import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES, SIZE_MEDIUM } from './icon.constants';
import { CLASS_NAMES } from './icon.class-names';

export const Icon = (props) => {
  const { className, classNames, size, name, ...restProps } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size
  });

  return (
    <i className={rootClassName} {...restProps}>
      {name}
    </i>
  );
};

Icon.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  size: SIZE_MEDIUM
};

Icon.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string
  }),

  /** Icon name */
  name: PropTypes.string.isRequired,

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES)
};

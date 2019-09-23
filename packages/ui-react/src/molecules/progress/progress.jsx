import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { KINDS, KIND_DEFAULT } from './progress.constants';
import { CLASS_NAMES } from './progress.class-names';

export const Progress = (props) => {
  const {
    as: Component,
    className,
    classNames,
    getBarProps,
    kind,
    total,
    value,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className, { [classNames[kind]]: kind });
  const barClassName = cx(classNames.bar, { [classNames[`bar--${kind}`]]: kind });
  const progress = (value / total) * 100;

  return (
    <Component className={rootClassName} {...restProps}>
      <span
        {...getBarProps({
          className: barClassName,
          style: {
            width: `${progress}%`
          }
        })}
      />
    </Component>
  );
};

Progress.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  as: 'div',
  kind: KIND_DEFAULT,
  total: 100,
  getBarProps: (props) => props
};

Progress.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string,
    bar: PropTypes.string
  }),

  /** Render tag or component */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** Kind modifier name */
  kind: PropTypes.oneOf(KINDS),

  /** Progress value */
  value: PropTypes.number.isRequired,

  /** Total number */
  total: PropTypes.number,

  /** Bar props getter */
  getBarProps: PropTypes.func
};

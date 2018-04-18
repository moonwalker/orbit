import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './select.constants';
import { CLASS_NAMES } from './select.class-names';

export const Select = (props) => {
  const {
    className,
    classNames,
    size,
    valid,
    options,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size,
    [classNames.valid]: valid === true,
    [classNames.invalid]: valid === false,
  });

  return (
    <select
      className={rootClassName}
      {...restProps}
    >
      {options.map((option) => {
        if (typeof option === 'string') {
          return (
            <option key={option}>
              {option}
            </option>
          );
        }

        const { text, value, ...restOptionProps } = option;

        return (
          <option
            value={value}
            key={value}
            {...restOptionProps}
          >
            {text}
          </option>
        );
      })}
    </select>
  );
};

Select.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  size: null,
  valid: null,
  options: [],
};

Select.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  /* Size type */
  size: PropTypes.oneOf(SIZES),

  /* Valid boolean value */
  valid: PropTypes.bool,

  /* Select options array */
  options: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  SIZES,
  SIZE_MEDIUM,
} from './select.constants';
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
      {options.map((option, index) => {
        const item = (typeof option !== 'object') ?
          {
            value: option,
            text: option,
            key: option,
          } :
          {
            key: index,
            ...option,
          };

        const { text, value, ...restOptionProps } = item;

        return (
          <option
            value={value}
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
  size: SIZE_MEDIUM,
  valid: null,
  options: [],
};

Select.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string,
  }),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES),

  /** Valid boolean value */
  valid: PropTypes.bool,

  /** Options array */
  options: PropTypes.arrayOf(PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  )),
};

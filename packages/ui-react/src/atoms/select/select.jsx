import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  UI_NAME,
  SIZES,
  VALID,
  INVALID,
} from './select.constants';

export const Select = (props) => {
  const {
    className,
    size,
    valid,
    options,
    ...restProps
  } = props;

  const rootClassName = cx(UI_NAME, className, {
    [`${UI_NAME}--${size}`]: size,
    [`${UI_NAME}--${VALID}`]: valid === true,
    [`${UI_NAME}--${INVALID}`]: valid === false,
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
  size: null,
  valid: null,
  options: [],
};

Select.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* Size type */
  size: PropTypes.oneOf(SIZES),

  /* Valid boolean value */
  valid: PropTypes.bool,

  /* Select options array */
  options: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

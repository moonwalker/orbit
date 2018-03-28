import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  UI_NAME,
  KINDS,
  KIND_DEFAULT,
  SIZES,
  SIZE_MEDIUM,
} from './button.constants';

export const Button = (props) => {
  const {
    className,
    children,
    as: Component,
    kind,
    size,
    ...restProps
  } = props;

  const rootClassName = cx(UI_NAME, className, {
    [`${UI_NAME}--${kind}`]: kind,
    [`${UI_NAME}--${size}`]: size,
  });

  return (
    <Component
      className={rootClassName}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Button.defaultProps = {
  className: '',
  children: null,
  as: 'button',
  kind: KIND_DEFAULT,
  size: SIZE_MEDIUM,
};

Button.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* Inner conntent */
  children: PropTypes.node,

  /* Render tag or component */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /* Kind type */
  kind: PropTypes.oneOf(KINDS),

  /* Size type */
  size: PropTypes.oneOf(SIZES),
};

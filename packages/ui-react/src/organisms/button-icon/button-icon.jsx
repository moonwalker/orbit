import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../';
import {
  UI_NAME,
  KINDS,
  KIND_DEFAULT,
  SIZES,
} from './button-icon.constants';

export const ButtonIcon = (props) => {
  const {
    className,
    as: Component,
    name,
    kind,
    size,
    ...restProps
  } = props;

  const rootClassName = cx(UI_NAME, className, {
    [`${UI_NAME}--${size}`]: size,
    [`${UI_NAME}--${kind}`]: kind,
  });

  return (
    <Component
      className={rootClassName}
      {...restProps}
    >
      <Icon
        name={name}
        size={size}
      />
    </Component>
  );
};

ButtonIcon.defaultProps = {
  className: '',
  as: 'button',
  kind: KIND_DEFAULT,
  size: null,
};

ButtonIcon.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* Render tag or component */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /* Icon name */
  name: PropTypes.string.isRequired,

  /* Kind type */
  kind: PropTypes.oneOf(KINDS),

  /* Size type */
  size: PropTypes.oneOf(SIZES),
};

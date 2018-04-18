import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../';
import {
  KINDS,
  KIND_DEFAULT,
  SIZES,
} from './button-icon.constants';
import { CLASS_NAMES } from './button-icon.class-names';

export const ButtonIcon = (props) => {
  const {
    className,
    as: Component,
    name,
    kind,
    size,
    ...restProps
  } = props;

  const rootClassName = cx(CLASS_NAMES.root, className, {
    [CLASS_NAMES[size]]: size,
    [CLASS_NAMES[kind]]: kind,
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

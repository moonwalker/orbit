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
    classNames,
    as: Component,
    name,
    kind,
    size,
    renderIcon,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size,
    [classNames[kind]]: kind,
  });

  return (
    <Component
      className={rootClassName}
      {...restProps}
    >
      {renderIcon({ name, size })}
    </Component>
  );
};

ButtonIcon.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  as: 'button',
  kind: KIND_DEFAULT,
  size: null,
  renderIcon: props => <Icon {...props} />,
};

ButtonIcon.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.object, // eslint-disable-line react/forbid-prop-types

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

  /* Render Icon */
  renderIcon: PropTypes.func,
};

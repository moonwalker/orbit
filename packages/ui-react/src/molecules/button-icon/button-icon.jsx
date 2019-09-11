import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '../../atoms/icon';
import { KINDS, KIND_DEFAULT, SIZES, SIZE_MEDIUM } from './button-icon.constants';
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
    [classNames[kind]]: kind
  });

  return (
    <Component className={rootClassName} name={name} {...restProps}>
      {renderIcon({ name, size })}
    </Component>
  );
};

ButtonIcon.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  as: 'button',
  kind: KIND_DEFAULT,
  size: SIZE_MEDIUM,
  renderIcon: (props) => <Icon {...props} />
};

ButtonIcon.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string
  }),

  /** Render tag or component */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** Icon name */
  name: PropTypes.string.isRequired,

  /** Kind modifier name */
  kind: PropTypes.oneOf(KINDS),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES),

  /** Render Icon prop */
  renderIcon: PropTypes.func
};

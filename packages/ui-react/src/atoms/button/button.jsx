import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  KINDS,
  KIND_DEFAULT,
  SIZES,
  SIZE_MEDIUM,
} from './button.constants';
import { CLASS_NAMES } from './button.class-names';

const ButtonContent = ({ className, children }) => (
  <span className={className}>
    {children}
  </span>
);

ButtonContent.defaultProps = {
  className: '',
  children: null,
};

ButtonContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const mergePropValue = (propName, propValue, ownProps) => {
  if (propName === 'className') {
    return cx(ownProps.className, propValue);
  }

  return ownProps[propName] || propValue;
};

const mergePropsToChild = (childComponent, props) =>
  Object.entries(props).reduce((aggregator, [propName, propValue]) => ({
    ...aggregator,
    [propName]: mergePropValue(propName, propValue, childComponent.props),
  }), {});

const wrapChild = props => (child) => {
  if (!child) {
    return null;
  }

  const childComponent = typeof child === 'string' ?
    (
      <ButtonContent>
        {child}
      </ButtonContent>
    ) :
    child;

  return React.cloneElement(
    childComponent,
    mergePropsToChild(childComponent, props),
  );
};

export const Button = (props) => {
  const {
    className,
    classNames,
    children,
    as: Component,
    clear,
    kind,
    size,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[kind]]: !clear && kind,
    [classNames[size]]: size,
    [classNames.clear]: clear,
    [`${classNames.clear}--${kind}`]: clear && kind,
  });

  // Add .`__content` if there are multiple children
  const processedChildren = typeof children === 'string' ?
    children :
    React.Children.map(children, wrapChild({
      size,
      className: cx(classNames.content, {
        [classNames[`content--${size}`]]: size,
      }),
    }));

  return (
    <Component
      className={rootClassName}
      {...restProps}
    >
      {processedChildren}
    </Component>
  );
};

Button.defaultProps = {
  className: '',
  classNames: CLASS_NAMES,
  children: null,
  as: 'button',
  clear: false,
  kind: KIND_DEFAULT,
  size: SIZE_MEDIUM,
};

Button.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string,
  }),

  /** Inner content */
  children: PropTypes.node,

  /** Render tag or component */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Clear modifier flag */
  clear: PropTypes.bool,

  /** Kind modifier name */
  kind: PropTypes.oneOf(KINDS),

  /** Size modifier name */
  size: PropTypes.oneOf(SIZES),
};

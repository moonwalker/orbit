import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  UI_NAME,
  KINDS,
  KIND_DEFAULT,
  SIZES,
} from './button.constants';

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
    children,
    as: Component,
    clear,
    kind,
    size,
    ...restProps
  } = props;

  const rootClassName = cx(UI_NAME, className, {
    [`${UI_NAME}--${kind}`]: !clear && kind,
    [`${UI_NAME}--clear`]: clear,
    [`${UI_NAME}--clear--${kind}`]: clear && kind,
    [`${UI_NAME}--${size}`]: size,
  });

  // Add .`{UI_NAME}__content` if there are multiple children
  const processedChildren = typeof children === 'string' ?
    children :
    React.Children.map(children, wrapChild({
      size,
      className: cx(`${UI_NAME}__content`, {
        [`${UI_NAME}__content--${size}`]: size,
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
  children: null,
  as: 'button',
  clear: false,
  kind: KIND_DEFAULT,
  size: null,
};

Button.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** Inner content */
  children: PropTypes.node,

  /** Render tag or component */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Clear type */
  clear: PropTypes.bool,

  /** Kind type */
  kind: PropTypes.oneOf(KINDS),

  /** Size type */
  size: PropTypes.oneOf(SIZES),
};

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { UI_NAME } from './stack.constants';

export const Stack = (props) => {
  const {
    isInline,
    direction,
    align,
    justify,
    spacing,
    sx,
    sy,
    style,
    wrap,
    children,
    className,
    classNames,
    shouldWrapChildren,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className);

  const stackStyle = {
    ...style,
    display: isInline ? 'inline-flex' : 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    rowGap: `${sy || spacing}px`,
    columnGap: `${sx || spacing}px`,
    flexWrap: wrap
  };

  const childStyle = {
    display: 'inline-block',
    flex: '0 0 auto',
    minWidth: 0
  };

  const wrappedChildren = shouldWrapChildren
    ? children.map((child, index) => {
        const key = typeof child.key !== 'undefined' ? child.key : index;
        return (
          <div key={key} style={childStyle}>
            {child}
          </div>
        );
      })
    : children;

  return (
    <div className={rootClassName} style={stackStyle} {...restProps}>
      {wrappedChildren}
    </div>
  );
};

Stack.displayName = UI_NAME;

Stack.propTypes = {
  isInline: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  shouldWrapChildren: PropTypes.bool,
  spacing: PropTypes.number,
  sx: PropTypes.number,
  sy: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string
  })
};

Stack.defaultProps = {
  isInline: false,
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
  spacing: 0,
  wrap: 'nowrap',
  children: null,
  sx: 0,
  sy: 0,
  style: {},
  className: '',
  classNames: { root: UI_NAME },
  shouldWrapChildren: false
};

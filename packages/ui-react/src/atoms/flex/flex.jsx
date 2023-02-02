import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { UI_NAME } from './flex.constants';

export const Flex = (props) => {
  const {
    children,
    className,
    classNames,
    direction,
    alignContent,
    alignItems,
    justify,
    wrap,
    spacing,
    columnGap,
    rowGap,
    basis,
    grow,
    shrink,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className);

  const flexStyle = {
    alignItems,
    alignContent,
    display: 'flex',
    rowGap: `${rowGap || spacing}px`,
    columnGap: `${columnGap || spacing}px`,
    flexDirection: direction,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };

  return (
    <div className={rootClassName} style={flexStyle} {...restProps}>
      {children}
    </div>
  );
};

Flex.displayName = UI_NAME;

Flex.propTypes = {
  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around'
  ]),
  alignItems: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'baseline']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string
  }),
  children: PropTypes.node,
  style: PropTypes.object,
  spacing: PropTypes.number,
  columnGap: PropTypes.number,
  rowGap: PropTypes.number
};

Flex.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  direction: 'row',
  justify: 'flex-start',
  wrap: 'nowrap',
  className: '',
  classNames: { root: UI_NAME },
  children: null,
  style: {},
  spacing: 0,
  columnGap: 0,
  rowGap: 0
};

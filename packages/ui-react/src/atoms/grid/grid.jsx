import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { UI_NAME } from './grid.constants';

export const Grid = (props) => {
  const {
    children,
    className,
    classNames,
    templateAreas,
    gap,
    rowGap,
    columnGap,
    column,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns,
    isInline,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className);

  const gridStyle = {
    display: isInline ? 'inline-grid' : 'grid',
    gridTemplateAreas: templateAreas,
    gridGap: `${gap}px`,
    gridRowGap: `${rowGap || gap}px`,
    gridColumnGap: `${columnGap || gap}px`,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };

  return (
    <div className={rootClassName} style={gridStyle} {...restProps}>
      {children}
    </div>
  );
};

Grid.displayName = UI_NAME;

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classNames: PropTypes.shape({
    root: PropTypes.string
  }),
  templateAreas: PropTypes.string,
  gap: PropTypes.number,
  rowGap: PropTypes.number,
  columnGap: PropTypes.number,
  templateRows: PropTypes.string,
  templateColumns: PropTypes.string,
  autoFlow: PropTypes.oneOf(['row', 'column', 'dense', 'row dense', 'column dense']),
  autoRows: PropTypes.string,
  autoColumns: PropTypes.string,
  isInline: PropTypes.bool,
  column: PropTypes.string,
  row: PropTypes.string
};

Grid.defaultProps = {
  children: null,
  className: '',
  classNames: { root: UI_NAME },
  templateAreas: '',
  gap: 0,
  rowGap: 0,
  columnGap: 0,
  templateRows: '',
  templateColumns: '',
  autoFlow: 'row',
  autoRows: '',
  autoColumns: '',
  isInline: false,
  column: '',
  row: ''
};

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SIZES } from './list-group.constants';
import { CLASS_NAMES } from './list-group.class-names';

const getDefaultRender = items => ({ getListGroupItemProps }) =>
  items.map(item => (
    <li
      key={item}
      {...getListGroupItemProps()}
    >
      {item}
    </li>
  ));

export const ListGroup = (props) => {
  const {
    className,
    items,
    render,
    as: Component,
    size,
  } = props;

  const rootClassName = cx(CLASS_NAMES.root, className, {
    [CLASS_NAMES[size]]: size,
  });

  const getListGroupItemProps = (itemProps = {}) => ({
    ...itemProps,
    className: cx(CLASS_NAMES.item, itemProps.className),
  });

  const renderFn = render || getDefaultRender(items);

  return (
    <Component className={rootClassName}>
      {renderFn({
        getListGroupItemProps,
      })}
    </Component>
  );
};

ListGroup.defaultProps = {
  className: '',
  items: [],
  render: null,
  as: 'ul',
  size: null,
};

ListGroup.propTypes = {
  /* Adopted child class name */
  className: PropTypes.string,

  /* List items array */
  items: PropTypes.array, // eslint-disable-line react/forbid-prop-types

  /* Render prop conntent */
  render: PropTypes.func,

  /* Render tag or component */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /* Size type */
  size: PropTypes.oneOf(SIZES),
};

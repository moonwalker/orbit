import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  SIZES,
  SIZE_MEDIUM,
} from './list-group.constants';
import { CLASS_NAMES } from './list-group.class-names';

const getDefaultRender = (items) => ({ getListGroupItemProps }) => items.map((item) => (
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
    classNames,
    items,
    render,
    as: Component,
    size,
  } = props;

  const rootClassName = cx(classNames.root, className, {
    [classNames[size]]: size,
  });

  const getListGroupItemProps = (itemProps = {}) => ({
    ...itemProps,
    className: cx(classNames.item, itemProps.className),
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
  classNames: CLASS_NAMES,
  items: [],
  render: null,
  as: 'ul',
  size: SIZE_MEDIUM,
};

ListGroup.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  /** List items array */
  items: PropTypes.array, // eslint-disable-line react/forbid-prop-types

  /** Render prop conntent */
  render: PropTypes.func,

  /** Render tag or component */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Size modifier name  */
  size: PropTypes.oneOf(SIZES),
};

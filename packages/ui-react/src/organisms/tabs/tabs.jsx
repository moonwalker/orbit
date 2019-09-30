import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CLASS_NAMES } from './tabs.class-names';

export const Tabs = (props) => {
  const { as: Component, className, classNames, children, ...restProps } = props;
  const rootClassName = cx(classNames.root, className);

  return (
    <Component className={rootClassName} {...restProps}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          className: cx(
            classNames.item,
            child.props.className,
            child.props.isTabActive && classNames['item--active']
          )
        })
      )}
    </Component>
  );
};

Tabs.propTypes = {
  /* Render component */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS modules names */
  classNames: PropTypes.shape({
    root: PropTypes.string,
    item: PropTypes.string,
    'item--active': PropTypes.string,
    [PropTypes.string]: PropTypes.string
  }),

  /** Content */
  children: PropTypes.arrayOf(PropTypes.element)
};

Tabs.defaultProps = {
  as: 'div',
  className: '',
  classNames: CLASS_NAMES,
  children: null
};

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { UI_NAME } from './container.constants';

const PropTypeStringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const Container = (props) => {
  const {
    children,
    className,
    classNames,
    maxWidth,
    fluid,
    centerContent,
    width,
    margin,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    padding,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    color,
    bg,
    bgColor,
    opacity,
    ...restProps
  } = props;

  const rootClassName = cx(classNames.root, className);

  let styles = {};

  if (maxWidth) {
    styles.maxWidth = maxWidth;
  }

  if (centerContent) {
    styles.display = 'flex';
    styles.justifyContent = 'center';
    styles.alignItems = 'center';
  }

  if (width) {
    styles.width = width;
  }

  if (fluid) {
    styles.width = '100%';
  }

  if (margin) {
    styles.margin = margin;
  }

  if (m) {
    styles.margin = m;
  }

  if (mt) {
    styles.marginTop = mt;
  }

  if (mr) {
    styles.marginRight = mr;
  }

  if (mb) {
    styles.marginBottom = mb;
  }

  if (ml) {
    styles.marginLeft = ml;
  }

  if (mx) {
    styles.marginLeft = mx;
    styles.marginRight = mx;
  }

  if (my) {
    styles.marginTop = my;
    styles.marginBottom = my;
  }

  if (padding) {
    styles.padding = padding;
  }

  if (p) {
    styles.padding = p;
  }

  if (pt) {
    styles.paddingTop = pt;
  }

  if (pr) {
    styles.paddingRight = pr;
  }

  if (pb) {
    styles.paddingBottom = pb;
  }

  if (pl) {
    styles.paddingLeft = pl;
  }

  if (px) {
    styles.paddingLeft = px;
    styles.paddingRight = px;
  }

  if (py) {
    styles.paddingTop = py;
    styles.paddingBottom = py;
  }

  if (color) {
    styles.color = color;
  }

  if (bgColor) {
    styles.backgroundColor = bgColor;
  }

  if (bg) {
    styles.background = bg;
  }

  if (opacity) {
    styles.opacity = opacity;
  }

  return (
    <div className={rootClassName} style={styles} {...restProps}>
      {children}
    </div>
  );
};

Container.displayName = UI_NAME;

Container.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string
  }),

  children: PropTypes.node.isRequired,

  fluid: PropTypes.bool,
  maxWidth: PropTypeStringOrNumber,
  centerContent: PropTypes.bool,
  width: PropTypeStringOrNumber,
  margin: PropTypeStringOrNumber,
  m: PropTypeStringOrNumber,
  mt: PropTypeStringOrNumber,
  mr: PropTypeStringOrNumber,
  mb: PropTypeStringOrNumber,
  ml: PropTypeStringOrNumber,
  mx: PropTypeStringOrNumber,
  my: PropTypeStringOrNumber,
  padding: PropTypeStringOrNumber,
  p: PropTypeStringOrNumber,
  pt: PropTypeStringOrNumber,
  pr: PropTypeStringOrNumber,
  pb: PropTypeStringOrNumber,
  pl: PropTypeStringOrNumber,
  px: PropTypeStringOrNumber,
  py: PropTypeStringOrNumber,
  color: PropTypes.string,
  bg: PropTypes.string,
  bgColor: PropTypes.string,
  opacity: PropTypes.number
};

Container.defaultProps = {
  children: null,
  className: '',
  classNames: { root: UI_NAME }
};

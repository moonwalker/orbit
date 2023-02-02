import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { ORIENTATIONS, ORIENTATION_HORIZONTAL, UI_NAME } from './separator.constants';

export const Separator = (props) => {
  const { className, classNames, orientation, decorative, margin, ...restProps } = props;
  const rootClassName = cx(classNames.root, className);
  const marginStyle = orientation === ORIENTATION_HORIZONTAL ? `${margin}px 0` : `0 ${margin}px`;

  return (
    <SeparatorPrimitive.Root
      className={rootClassName}
      decorative={decorative}
      orientation={orientation}
      style={{ margin: marginStyle }}
      {...restProps}
    />
  );
};

Separator.displayName = UI_NAME;

Separator.defaultProps = {
  className: '',
  classNames: { root: UI_NAME },
  decorative: false,
  orientation: ORIENTATION_HORIZONTAL,
  margin: 15
};

Separator.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** CSS Modules class names mapping */
  classNames: PropTypes.shape({
    root: PropTypes.string
  }),

  /** Decorative separaotr xcarries no semantic meaning, 
   * and ensures it is not present in the accessibility tree. */
  decorative: PropTypes.bool,

  /** Orientation modifier name */
  orientation: PropTypes.oneOf(ORIENTATIONS),

  /** Margin value */
  margin: PropTypes.number
};

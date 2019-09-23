import {
  UI_NAME,
  KIND_DEFAULT,
  KIND_PRIMARY,
  KIND_SECONDARY,
  KIND_SUCCESS,
  KIND_INFO,
  KIND_WARNING,
  KIND_DANGER
} from './progress.constants';

export const CLASS_NAMES = {
  root: UI_NAME,

  [KIND_DEFAULT]: `${UI_NAME}--${KIND_DEFAULT}`,
  [KIND_PRIMARY]: `${UI_NAME}--${KIND_PRIMARY}`,
  [KIND_SECONDARY]: `${UI_NAME}--${KIND_SECONDARY}`,
  [KIND_SUCCESS]: `${UI_NAME}--${KIND_SUCCESS}`,
  [KIND_INFO]: `${UI_NAME}--${KIND_INFO}`,
  [KIND_WARNING]: `${UI_NAME}--${KIND_WARNING}`,
  [KIND_DANGER]: `${UI_NAME}--${KIND_DANGER}`,

  bar: `${UI_NAME}__bar`,
  [`bar--${KIND_DEFAULT}`]: `${UI_NAME}__bar--${KIND_DEFAULT}`,
  [`bar--${KIND_PRIMARY}`]: `${UI_NAME}__bar--${KIND_PRIMARY}`,
  [`bar--${KIND_SECONDARY}`]: `${UI_NAME}__bar--${KIND_SECONDARY}`,
  [`bar--${KIND_SUCCESS}`]: `${UI_NAME}__bar--${KIND_SUCCESS}`,
  [`bar--${KIND_INFO}`]: `${UI_NAME}__bar--${KIND_INFO}`,
  [`bar--${KIND_WARNING}`]: `${UI_NAME}__bar--${KIND_WARNING}`,
  [`bar--${KIND_DANGER}`]: `${UI_NAME}__bar--${KIND_DANGER}`
};

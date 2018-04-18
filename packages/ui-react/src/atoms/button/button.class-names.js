import {
  UI_NAME,

  KIND_DEFAULT,
  KIND_PRIMARY,
  KIND_SECONDARY,
  KIND_SUCCESS,
  KIND_INFO,
  KIND_WARNING,
  KIND_DANGER,

  SIZE_XSMALL,
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE,
  SIZE_XLARGE,

} from './button.constants';

export const CLASS_NAMES = {
  root: UI_NAME,

  [KIND_DEFAULT]: `${UI_NAME}--${KIND_DEFAULT}`,
  [KIND_PRIMARY]: `${UI_NAME}--${KIND_PRIMARY}`,
  [KIND_SECONDARY]: `${UI_NAME}--${KIND_SECONDARY}`,
  [KIND_SUCCESS]: `${UI_NAME}--${KIND_SUCCESS}`,
  [KIND_INFO]: `${UI_NAME}--${KIND_INFO}`,
  [KIND_WARNING]: `${UI_NAME}--${KIND_WARNING}`,
  [KIND_DANGER]: `${UI_NAME}--${KIND_DANGER}`,

  [SIZE_XSMALL]: `${UI_NAME}--${SIZE_XSMALL}`,
  [SIZE_SMALL]: `${UI_NAME}--${SIZE_SMALL}`,
  [SIZE_MEDIUM]: `${UI_NAME}--${SIZE_MEDIUM}`,
  [SIZE_LARGE]: `${UI_NAME}--${SIZE_LARGE}`,
  [SIZE_XLARGE]: `${UI_NAME}--${SIZE_XLARGE}`,

  clear: `${UI_NAME}--clear`,

  [`clear--${KIND_DEFAULT}`]: `${UI_NAME}--clear--${KIND_DEFAULT}`,
  [`clear--${KIND_PRIMARY}`]: `${UI_NAME}--clear--${KIND_PRIMARY}`,
  [`clear--${KIND_SECONDARY}`]: `${UI_NAME}--clear--${KIND_SECONDARY}`,
  [`clear--${KIND_SUCCESS}`]: `${UI_NAME}--clear--${KIND_SUCCESS}`,
  [`clear--${KIND_INFO}`]: `${UI_NAME}--clear--${KIND_INFO}`,
  [`clear--${KIND_WARNING}`]: `${UI_NAME}--clear--${KIND_WARNING}`,
  [`clear--${KIND_DANGER}`]: `${UI_NAME}--clear--${KIND_DANGER}`,

  content: `${UI_NAME}__content`,
  [`content--${SIZE_XSMALL}`]: `${UI_NAME}__content--${SIZE_XSMALL}`,
  [`content--${SIZE_SMALL}`]: `${UI_NAME}__content--${SIZE_SMALL}`,
  [`content--${SIZE_MEDIUM}`]: `${UI_NAME}__content--${SIZE_MEDIUM}`,
  [`content--${SIZE_LARGE}`]: `${UI_NAME}__content--${SIZE_LARGE}`,
  [`content--${SIZE_XLARGE}`]: `${UI_NAME}__content--${SIZE_XLARGE}`,
};

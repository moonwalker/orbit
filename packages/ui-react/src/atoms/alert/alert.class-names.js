import {
  UI_NAME,
  KIND_DEFAULT,
  KIND_SUCCESS,
  KIND_INFO,
  KIND_WARNING,
  KIND_DANGER,
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE
} from './alert.constants';

export const CLASS_NAMES = {
  root: UI_NAME,

  [KIND_DEFAULT]: `${UI_NAME}--${KIND_DEFAULT}`,
  [KIND_SUCCESS]: `${UI_NAME}--${KIND_SUCCESS}`,
  [KIND_INFO]: `${UI_NAME}--${KIND_INFO}`,
  [KIND_WARNING]: `${UI_NAME}--${KIND_WARNING}`,
  [KIND_DANGER]: `${UI_NAME}--${KIND_DANGER}`,

  [SIZE_SMALL]: `${UI_NAME}--${SIZE_SMALL}`,
  [SIZE_MEDIUM]: `${UI_NAME}--${SIZE_MEDIUM}`,
  [SIZE_LARGE]: `${UI_NAME}--${SIZE_LARGE}`,

  outline: `${UI_NAME}--outline`,
  [`outline--${KIND_SUCCESS}`]: `${UI_NAME}--outline--${KIND_SUCCESS}`,
  [`outline--${KIND_INFO}`]: `${UI_NAME}--outline--${KIND_INFO}`,
  [`outline--${KIND_WARNING}`]: `${UI_NAME}--outline--${KIND_WARNING}`,
  [`outline--${KIND_DANGER}`]: `${UI_NAME}--outline--${KIND_DANGER}`,

  [`outline--${SIZE_SMALL}`]: `${UI_NAME}--outline--${SIZE_SMALL}`,
  [`outline--${SIZE_MEDIUM}`]: `${UI_NAME}--outline--${SIZE_MEDIUM}`,
  [`outline--${SIZE_LARGE}`]: `${UI_NAME}--outline--${SIZE_LARGE}`
};

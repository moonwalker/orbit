import {
  UI_NAME,
  KIND_DEFAULT,
  KIND_PRIMARY,
  KIND_SECONDARY,
  KIND_SUCCESS,
  KIND_INFO,
  KIND_WARNING,
  KIND_DANGER,
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE
} from './tag.constants';

export const CLASS_NAMES = {
  root: UI_NAME,

  [KIND_DEFAULT]: `${UI_NAME}--${KIND_DEFAULT}`,
  [KIND_PRIMARY]: `${UI_NAME}--${KIND_PRIMARY}`,
  [KIND_SECONDARY]: `${UI_NAME}--${KIND_SECONDARY}`,
  [KIND_SUCCESS]: `${UI_NAME}--${KIND_SUCCESS}`,
  [KIND_INFO]: `${UI_NAME}--${KIND_INFO}`,
  [KIND_WARNING]: `${UI_NAME}--${KIND_WARNING}`,
  [KIND_DANGER]: `${UI_NAME}--${KIND_DANGER}`,

  [SIZE_SMALL]: `${UI_NAME}--${SIZE_SMALL}`,
  [SIZE_MEDIUM]: `${UI_NAME}--${SIZE_MEDIUM}`,
  [SIZE_LARGE]: `${UI_NAME}--${SIZE_LARGE}`
};

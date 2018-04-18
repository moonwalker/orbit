import {
  UI_NAME,
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE,
} from './spinner.constants';

export const CLASS_NAMES = {
  root: UI_NAME,
  [SIZE_SMALL]: `${UI_NAME}--${SIZE_SMALL}`,
  [SIZE_MEDIUM]: `${UI_NAME}--${SIZE_MEDIUM}`,
  [SIZE_LARGE]: `${UI_NAME}--${SIZE_LARGE}`,
};

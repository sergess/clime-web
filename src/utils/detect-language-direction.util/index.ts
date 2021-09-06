import { RTL_LANGUAGES_LIST } from 'src/constants';
import { LangaugeDirections } from 'src/types';

export const detectLanguageDirection = (locale = 'en'): LangaugeDirections =>
  RTL_LANGUAGES_LIST.includes(locale)
    ? LangaugeDirections.RTL
    : LangaugeDirections.LTR;

export default detectLanguageDirection;

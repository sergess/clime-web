import { RTL_LANGUAGES_LIST } from 'client/constants';
import { LangaugeDirections } from 'client/types';

export const detectLanguageDirection = (locale = 'en'): LangaugeDirections =>
  RTL_LANGUAGES_LIST.includes(locale)
    ? LangaugeDirections.RTL
    : LangaugeDirections.LTR;

export default detectLanguageDirection;

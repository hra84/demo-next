import { GLOBAL } from "../defines";

export const setGlobalLanguage = (lang) => ({
  type: GLOBAL.SET_LANGUAGE,
  lang,
});

export const setGlobalCurrency = (cur) => ({
  type: GLOBAL.SET_CURRENCY,
  cur,
});

export const setGlobalCategory = (category) => ({
  type: GLOBAL.SET_CATEGORY,
  category,
});

export const setGlobalSearch = (keyword) => ({
  type: GLOBAL.SET_SEARCH,
  keyword,
});

import { SHOP } from "../defines";

export const setSort = (sortType) => ({
  type: SHOP.SET_SORT,
  sortType,
});

export const setSubCategory = (subCategory) => ({
  type: SHOP.SET_SUBCATEGORY,
  subCategory,
});

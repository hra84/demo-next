import { SHOP } from "../defines";

const initialState = {
  sort: "default",
  subCategory: "",
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOP.SET_SORT:
      return {
        ...state,
        sort: action.sortType,
      };
    case SHOP.SET_SUBCATEGORY:
      return {
        ...state,
        subCategory: action.subCategory,
      };
    default:
      return state;
  }
};

export default shopReducer;

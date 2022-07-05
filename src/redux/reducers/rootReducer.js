import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import globalReducer from "./globalReducer";
import wishlistReducer from "./wishlistReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  cartReducer,
  globalReducer,
  wishlistReducer,
  shopReducer,
});

export default rootReducer;

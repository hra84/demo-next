import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["globalReducer", "shopReducer"],
};

const pReducer = persistReducer(persistConfig, rootReducer);
const createdStore = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const initializeStore = (initialState = {}) => {
  return createdStore;
};
export const persistor = persistStore(createdStore);

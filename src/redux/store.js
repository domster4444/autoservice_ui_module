import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { globalConstant } from "constant/constant";

//?  import these for redux
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { setupListeners } from "@reduxjs/toolkit/query";

// todo: slice reducers
import counterReducer from "redux/features/counter/counterSlice";
// todo: rtk queries
import { categoryApi } from "redux/api/category/categoryApi";

// using combine reducer to combine redux toolkit and rtk queries
const reducers = combineReducers({
  // TOOLKIT REDUCERS
  counter: counterReducer,
  // RTK API QUERIES
  [categoryApi.reducerPath]: categoryApi.reducer,

  // middleware for RTK QUERY API
});

// configuration for redux toolkit
const persistConfig = {
  key: "root",
  storage,
};

// integrate redux persist with redux toolkit
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: globalConstant.environment !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryApi.middleware),
});

setupListeners(store.dispatch);

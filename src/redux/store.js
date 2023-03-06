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
import loggedUserReducer from "redux/features/loggedUser/loggedUserSlice";
// todo: rtk queries
import { categoryApi } from "redux/api/category/categoryApi";
import { authApi } from "redux/api/auth/authApi";

// using combine reducer to combine redux toolkit and rtk queries
const reducers = combineReducers({
  // TOOLKIT REDUCERS
  counter: counterReducer,
  loggedUser: loggedUserReducer,

  // RTK API QUERIES
  [categoryApi.reducerPath]: categoryApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
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

  // middleware for RTK QUERY API
  middleware: [...getDefaultMiddleware(), thunk, categoryApi.middleware, authApi.middleware],
});

setupListeners(store.dispatch);

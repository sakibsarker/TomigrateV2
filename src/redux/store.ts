"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/slices/apiSlice";
import { authSlice } from "@/slices/authSlice";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { sideNavSlice } from "@/slices/sideNavSlice";
import { themeSlice } from "@/slices/themeSlice";
import storage from "@/redux/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["sideNav", "theme", "auth"],
};

const rootReducer = combineReducers({
  api: apiSlice.reducer,
  sidenav: sideNavSlice.reducer,
  theme: themeSlice.reducer,
  auth: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

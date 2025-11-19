"use client";

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "@/lib/features/slices/authSlice";
import loaderReducer from "@/lib/features/slices/loaderSlice";


import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';


const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
"use client";

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/slices/apiSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            api: apiSlice.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSlice.middleware)
    });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


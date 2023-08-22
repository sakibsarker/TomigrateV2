import { createSlice } from "@reduxjs/toolkit";
import { REFETCH_INTERVAL } from "@/common/constants/api.constants";

type AuthState = {
  token: string | null | undefined;
  user: any | null;
  authenticationToken: string | null;
  tokenExpirationTime: number | null;
};

const initialState = {
  token: null,
  user: null,
  authenticationToken: null,
  tokenExpirationTime: REFETCH_INTERVAL,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialState as AuthState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.token = undefined;
      state.user = undefined;
    },
    setAuthToken: (state, action) => {
      state.authenticationToken = action.payload;
    },
    removeAuthToken: (state) => {
      state.authenticationToken = null;
    },
    setAuthTokenExpirationTime: (state, action) => {
      state.tokenExpirationTime = action.payload;
    },
    removeAuthTokenExpirationTime: (state) => {
      state.tokenExpirationTime = null;
    },
    resetAuthState: () => {
      return initialState;
    },
  },
});

export const {
  userLoggedIn,
  userLoggedOut,
  setAuthToken,
  removeAuthToken,
  setAuthTokenExpirationTime,
  removeAuthTokenExpirationTime,
  resetAuthState,
} = authSlice.actions;

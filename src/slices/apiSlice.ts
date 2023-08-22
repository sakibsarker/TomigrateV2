"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "@/common/constants/api.constants";
import { resetAuthState } from "./authSlice";

type User = any;

const baseQuery = fetchBaseQuery({ baseUrl: "/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registrationStatus: builder.query({
      query: () => API_ENDPOINTS.REGISTRATION_STATUS,
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            /* empty */
          }
        } catch (error) {
          console.log("Register Status catch error:", error);
        }
      },
    }),
    getCurrentUser: builder.query<User, void>({
      query: () => "current",
    }),
    registerUser: builder.mutation<
      { user: User },
      { email: string; username: string; password: string }
    >({
      query: (newUserData) => ({
        url: "/register",
        method: "POST",
        body: newUserData,
      }),
    }),
    loginUser: builder.mutation<
      { user: User },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
    authenticationStatus: builder.query({
      query: () => API_ENDPOINTS.AUTHENTICATION_STATUS,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;

          if (data) {
            /* empty */
          }
        } catch (error) {
          dispatch(resetAuthState());
          //console.log('Authentication status catch error: ', data);
        }
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetCurrentUserQuery,
} = apiSlice;

"use client";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = any;

const baseQuery = fetchBaseQuery({ baseUrl: '/api/users' });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
    getCurrentUser: builder.query<User, void>({
        query: () => 'current',
    }),
    registerUser: builder.mutation<{ user: User }, { email: string; username: string; password: string }>({
        query: (newUserData) => ({
            url: '/signup',
            method: 'POST',
            body: newUserData
        }),
    }),
    loginUser: builder.mutation<{ user: User }, { email: string; password: string }>({
        query: (credentials) => ({
            url: '/login',
            method: 'POST',
            body: credentials
        }),
    }),
    logoutUser: builder.mutation<void, void>({
        query: () => ({
            url: '/logout',
            method: 'GET',
        }),
    }),
    
}),

});

export const { useRegisterUserMutation,useLoginUserMutation,useLogoutUserMutation } = apiSlice;

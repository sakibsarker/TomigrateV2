"use client";

import { createSlice } from "@reduxjs/toolkit";

type SideNav = {
  open: boolean;
};

export const sideNavSlice = createSlice({
  name: "sidenav",
  initialState: {
    open: false,
  } as SideNav,
  reducers: {
    toggleSideNav: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleSideNav } = sideNavSlice.actions;

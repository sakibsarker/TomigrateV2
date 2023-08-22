import { createSlice } from "@reduxjs/toolkit";
import { THEME_APPEARANCE } from "@/common/constants/app.constants";

const initialState = {
  themeAppearance: THEME_APPEARANCE.LIGHT_MODE,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeAppearance(state, action) {
      state.themeAppearance = action.payload;
    },
  },
});

export const { setThemeAppearance } = themeSlice.actions;

"use client";
import * as React from "react";
import { themeOptions } from "@/theme/themeOptions";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { deepmerge } from "@mui/utils";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultThemeOptions = deepmerge({}, themeOptions);
  const themeAppearance = useSelector(
    (state: any) => state.theme.themeAppearance
  );

  const currentTheme = useMemo(
    () =>
      createTheme(
        deepmerge(defaultThemeOptions, {
          palette: {
            mode: themeAppearance,
          },
        })
      ),
    [themeAppearance, defaultThemeOptions]
  );

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={currentTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

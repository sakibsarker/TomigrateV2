"use client";
import MonkeyAppBar from "@/components/app-bar/AppBar";
import SideNav from "@/components/sidenav/sidenav";
import ThemeRegistry from "@/theme/themeRegistry";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <SideNav />
            <Box sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
              <MonkeyAppBar />
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}

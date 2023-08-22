"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/translations/i18n";

import "./global.css";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18n} defaultNS={"translation"}>
              {children}
            </I18nextProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;

"use client";
import { extendTheme, UIStyle, UsageTheme } from "@yamada-ui/react";

const globalStyle: UIStyle = {
  body: {
    bg: "#F5F9FA",
  },
};

const customTheme: UsageTheme = {
  styles: { globalStyle },
};

export const theme = extendTheme(customTheme)();

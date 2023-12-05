"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

type themeType = "light" | "dark" | "system" | undefined;
export const CustomToaster = () => {
  const { theme } = useTheme();

  return <Toaster position="top-center" closeButton invert theme={theme as themeType} />;
};

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ThemeSwitch from "@/components/theme/theme-switch";
import MenuBar from "@/components/base/MenuBar";
import { CustomToaster } from "@/components/base/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gwala dashboard",
  description: "Gwala dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <MenuBar />
          {children}
          <ThemeSwitch />
          <CustomToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

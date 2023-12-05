import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ThemeSwitch from "@/components/theme/theme-switch";
import MenuBar from "@/components/base/MenuBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gwala dashboard",
  description: "Gwala dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <MenuBar />
          {children}
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}

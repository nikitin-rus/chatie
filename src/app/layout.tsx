import type { Metadata } from "next";
import I18NextProvider from "@/providers/I18NextProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome | Chatie",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <I18NextProvider>{children}</I18NextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

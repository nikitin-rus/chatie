import type { Metadata } from "next";
import I18NextProvider from "@/providers/I18NextProvider";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <I18NextProvider>{children}</I18NextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

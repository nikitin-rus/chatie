import { Header } from "@/ui/Header";
import { PageContainer } from "@/ui/PageContainer";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Chatie | Auth",
  description: "",
};

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

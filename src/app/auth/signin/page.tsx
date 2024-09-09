import { SignInCard } from "@/ui/cards/auth/SignInCard";
import { PageContainer } from "@/ui/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Chatie",
  description: "",
};

export default function SignInPage() {
  return (
    <PageContainer isCentered={true}>
      <SignInCard />
    </PageContainer>
  );
}

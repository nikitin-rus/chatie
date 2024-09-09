import { SignUpCard } from "@/ui/cards/auth/SignUpCard";
import { PageContainer } from "@/ui/PageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Chatie",
  description: "",
};

export default function SignUpPage() {
  return (
    <PageContainer isCentered={true}>
      <SignUpCard />
    </PageContainer>
  );
}

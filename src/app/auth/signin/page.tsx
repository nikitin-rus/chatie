import { initialFormData } from "@/data";
import { SignInCard } from "@/ui/cards/auth/SignInCard";

export default function SigninPage() {
  return <SignInCard initialFormData={initialFormData}></SignInCard>;
}

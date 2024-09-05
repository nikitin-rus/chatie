import { initialFormData } from "@/data";
import { SignUpCard } from "@/ui/cards/auth/SignUpCard";

export default function SignUpPage() {
  return <SignUpCard initialFormData={initialFormData}></SignUpCard>;
}

"use client";

import Link from "next/link";
import paths from "@/paths";
import { SignInForm, SignInFormProps } from "@/ui/forms/SignInForm";
import { AuthCard } from "../AuthCard";
import { useTranslation } from "react-i18next";

interface SignInCardProps extends SignInFormProps {}

export function SignInCard({ initialFormData }: SignInCardProps) {
  const { t } = useTranslation();

  return (
    <AuthCard title={t("signIn")}>
      <SignInForm initialFormData={initialFormData} />
      <label>
        {t("doNotHaveAnAccount")}
        <Link href={paths.signup}>{t("signUp")}</Link>
      </label>
    </AuthCard>
  );
}

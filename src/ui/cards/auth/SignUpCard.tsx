"use client";

import Link from "next/link";
import paths from "@/paths";
import { SignUpForm, SignUpFormProps } from "@/ui/forms/SignUpForm";
import { AuthCard } from "../AuthCard";
import { useTranslation } from "react-i18next";

interface SignUpCardProps extends SignUpFormProps {}

export function SignUpCard({ initialFormData }: SignUpCardProps) {
  const { t } = useTranslation();

  return (
    <AuthCard title={t("signUp")}>
      <SignUpForm initialFormData={initialFormData} />
      <label>
        {t("alreadyHaveAnAccount")}
        <Link href={paths.signin}>{t("signIn")}</Link>
      </label>
    </AuthCard>
  );
}

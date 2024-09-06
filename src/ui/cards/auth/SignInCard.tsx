"use client";

import NextLink from "next/link";
import paths from "@/paths";
import { SignInForm, SignInFormProps } from "@/ui/forms/SignInForm";
import { AuthCard } from "../AuthCard";
import { useTranslation } from "react-i18next";
import { Link, Typography } from "@mui/material";

interface SignInCardProps extends SignInFormProps {}

export function SignInCard({ initialFormData }: SignInCardProps) {
  const { t } = useTranslation();

  return (
    <AuthCard title={t("pages.auth.signIn.title")}>
      <SignInForm initialFormData={initialFormData} />

      <Typography variant="body3">
        <span>{t("pages.auth.signIn.doNotHaveAnAccount")}</span>{" "}
        <Link href={paths.signup} component={NextLink}>
          {t("pages.auth.signIn.signUp")}
        </Link>
      </Typography>
    </AuthCard>
  );
}

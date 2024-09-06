"use client";

import NextLink from "next/link";
import paths from "@/paths";
import { SignUpForm, SignUpFormProps } from "@/ui/forms/SignUpForm";
import { AuthCard } from "../AuthCard";
import { useTranslation } from "react-i18next";
import { Link, Typography } from "@mui/material";

interface SignUpCardProps extends SignUpFormProps {}

export function SignUpCard({ initialFormData }: SignUpCardProps) {
  const { t } = useTranslation();

  return (
    <AuthCard title={t("pages.auth.signUp.title")}>
      <SignUpForm initialFormData={initialFormData} />

      <Typography variant="body3">
        <span>{t("pages.auth.signUp.alreadyHaveAnAccount")}</span>{" "}
        <Link href={paths.signin} component={NextLink}>
          {t("pages.auth.signUp.signIn")}
        </Link>
      </Typography>
    </AuthCard>
  );
}

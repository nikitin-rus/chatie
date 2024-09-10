"use client";

import paths from "@/paths";
import { SignInForm, SignInFormProps } from "@/ui/forms/SignInForm";
import { AuthCard } from "./AuthCard";
import { useTranslation } from "react-i18next";
import { Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface SignInCardProps extends SignInFormProps {}

export function SignInCard({ initialFormData }: SignInCardProps) {
  const { t } = useTranslation();

  return (
    <AuthCard title={t("pages.auth.signIn.title")}>
      <SignInForm initialFormData={initialFormData} />

      <Text>
        <span>{t("pages.auth.signIn.doNotHaveAnAccount")}</span>{" "}
        <Link href={paths.signup} as={NextLink}>
          {t("pages.auth.signIn.signUp")}
        </Link>
      </Text>
    </AuthCard>
  );
}

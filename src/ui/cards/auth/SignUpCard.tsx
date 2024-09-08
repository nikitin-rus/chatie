"use client";

import { Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import NextLink from "next/link";
import { SignUpForm, SignUpFormProps } from "@/ui/forms/SignUpForm";
import { AuthCard } from "../AuthCard";
import paths from "@/paths";

interface SignUpCardProps extends SignUpFormProps {}

export function SignUpCard({ initialFormData }: SignUpCardProps) {
  const { t } = useTranslation();

  return (
    <AuthCard title={t("pages.auth.signUp.title")}>
      <SignUpForm initialFormData={initialFormData} />

      <Text>
        <span>{t("pages.auth.signUp.alreadyHaveAnAccount")}</span>{" "}
        <Link href={paths.signin} as={NextLink}>
          {t("pages.auth.signUp.signIn")}
        </Link>
      </Text>
    </AuthCard>
  );
}

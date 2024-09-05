"use client";

import Link from "next/link";
import paths from "@/paths";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Link href={paths.signin}>{t("signIn")}</Link>
      <Link href={paths.signup}>{t("signUp")}</Link>
    </div>
  );
}

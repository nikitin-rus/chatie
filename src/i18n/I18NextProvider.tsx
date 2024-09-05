"use client";

import i18n from "@/i18n/i18n";
import { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";

interface Props extends PropsWithChildren {}

export default function I18NextProvider({ children }: Props) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

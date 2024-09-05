import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enNs1 from "./locales/en/ns1";
import ruNs1 from "./locales/ru/ns1";

export const defaultNS = "ns1";
export const resources = {
  en: {
    ns1: enNs1,
  },
  ru: {
    ns1: ruNs1,
  },
} as const;

i18n
  .use(initReactI18next)
  .init({ debug: true, fallbackLng: "en", defaultNS, resources });

export default i18n;

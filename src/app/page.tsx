"use client";

import paths from "@/paths";
import { useTranslation } from "react-i18next";
import NextLink from "next/link";
import { PageContainer } from "@/ui/PageContainer";
import { Flex, Heading, Text, Link } from "@chakra-ui/react";

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <PageContainer isCentered={true}>
      <Flex
        flexDirection="column"
        alignItems="self-start"
        rowGap="1.5rem"
        maxWidth="md"
      >
        <Heading textStyle="h1" as="h1">
          {t("pages.main.chatie")}
        </Heading>

        <Text textStyle="body1">{t("pages.main.chatieDescription")}</Text>

        <Link as={NextLink} href={paths.signin}>
          <Text textStyle="body2">{t("pages.main.goToSignIn")}</Text>
        </Link>
      </Flex>
    </PageContainer>
  );
}

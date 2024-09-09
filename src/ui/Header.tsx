"use client";

import { Container, Flex, Heading, IconButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Close } from "./icons/Close";

export function Header() {
  const { t } = useTranslation();

  return (
    <Container
      as="header"
      maxWidth="container.xl"
      height={0}
      position="relative"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p="1.5rem"
        position="absolute"
        left={0}
        right={0}
      >
        <Heading textStyle="h1" as="h1">
          {t("pages.main.chatie")}
        </Heading>

        <IconButton
          size="iconDefault"
          aria-label="Close auth popup"
          icon={<Close />}
          isRound={true}
        />
      </Flex>
    </Container>
  );
}

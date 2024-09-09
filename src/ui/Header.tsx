"use client";

import {
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  textDecoration,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Close } from "./icons/Close";
import NextLink from "next/link";
import paths from "@/paths";

export function Header() {
  const { t } = useTranslation();

  function handleClose() {}

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
        <Link
          as={NextLink}
          href={paths.root}
          cursor="pointer"
          color="grayscale.7"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Heading textStyle="h1" as="h1">
            {t("pages.main.chatie")}
          </Heading>
        </Link>

        <Link href={paths.root}>
          <IconButton
            size="iconDefault"
            aria-label="Close auth popup"
            icon={<Close />}
            isRound={true}
          />
        </Link>
      </Flex>
    </Container>
  );
}

"use client";

import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MenuCard } from "./MenuCard";
import { Search } from "@/ui/icons/Search";

export function Sidebar() {
  const { t } = useTranslation();

  return (
    <Flex
      flexDir="column"
      rowGap="1rem"
      p="1.25rem 1.5rem"
      bg="grayscale.1"
      h="100%"
    >
      <Flex as="nav" position="relative" columnGap="1rem">
        <MenuCard />
        <InputGroup>
          <Input placeholder={t("pages.chats.sidebar.userName")} pr="3.5rem" />
          <InputRightElement>
            <Search />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex flexDir="column" pt="2.5rem">
        <Text textStyle="message1" textAlign="center">
          {t("pages.chats.sidebar.noChats")} <br />
          {t("pages.chats.sidebar.findUsers")}
        </Text>
      </Flex>
    </Flex>
  );
}

"use client";

import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Menu } from "./icons/Menu";
import { Search } from "./icons/Search";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { MenuCard } from "./cards/chats/MenuCard";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export function Sidebar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useOutsideClick(handleOutsideClick, menuRef, menuButtonRef);

  function handleMenuButtonClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleOutsideClick() {
    setIsMenuOpen(false);
  }

  return (
    <Flex
      flexDir="column"
      rowGap="1rem"
      p="1.25rem 1.5rem"
      bg="grayscale.1"
      h="100%"
    >
      <Flex as="nav" position="relative" columnGap="1rem">
        <IconButton
          ref={menuButtonRef}
          size="iconBig"
          aria-label="open menu icon"
          icon={<Menu />}
          isRound={true}
          onClick={handleMenuButtonClick}
          isActive={isMenuOpen}
        />

        <InputGroup>
          <Input placeholder={t("pages.chats.sidebar.userName")} pr="3.5rem" />

          <InputRightElement>
            <Search />
          </InputRightElement>
        </InputGroup>

        {isMenuOpen && (
          <Box position="absolute" top="5rem" left={0} right={0} ref={menuRef}>
            <MenuCard />
          </Box>
        )}
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

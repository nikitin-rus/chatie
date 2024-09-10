"use client";

import { Flex } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { Settings } from "@/ui/icons/Settings";
import { useTranslation } from "react-i18next";
import { LogOut } from "@/ui/icons/LogOut";

export function MenuCard() {
  const { t } = useTranslation();

  function handleSettingsClick() {}

  function handleLogOut() {}

  return (
    <Flex
      flexDir="column"
      boxShadow="2xl"
      borderRadius="15px"
      overflow="hidden"
      as="nav"
    >
      <MenuItem
        icon={<Settings />}
        title={t("pages.chats.menu.settings")}
        onClick={handleSettingsClick}
      />
      <MenuItem
        icon={<LogOut />}
        title={t("pages.chats.menu.logOut")}
        onClick={handleLogOut}
      />
    </Flex>
  );
}

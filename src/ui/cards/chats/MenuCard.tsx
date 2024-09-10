"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Settings } from "@/ui/icons/Settings";
import { useTranslation } from "react-i18next";
import { LogOut } from "@/ui/icons/LogOut";
import { Menu as MenuIcon } from "@/ui/icons/Menu";

export function MenuCard() {
  const { t } = useTranslation();

  function handleSettingsClick() {}

  function handleLogOut() {}

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        size="iconBig"
        aria-label="open menu icon"
        icon={<MenuIcon />}
        isRound={true}
      />
      <MenuList>
        <MenuItem icon={<Settings />} onClick={handleSettingsClick}>
          {t("pages.chats.menu.settings")}
        </MenuItem>
        <MenuItem icon={<LogOut />} onClick={handleLogOut}>
          {t("pages.chats.menu.logOut")}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

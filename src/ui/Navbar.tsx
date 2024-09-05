"use client";

import { signOut } from "@/firebase/auth";
import { useUser } from "@/hooks/useUser";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();
  const user = useUser();

  async function handleSignOut() {
    await signOut();
    console.log("Successfully signed a user out.");
  }

  return (
    <nav>
      {user?.email && (
        <h1>
          {t("hello")}, {user?.email}
        </h1>
      )}

      <button disabled={!user} onClick={handleSignOut}>
        {t("signOut")}
      </button>
    </nav>
  );
}

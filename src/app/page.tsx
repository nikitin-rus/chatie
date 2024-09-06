"use client";

import paths from "@/paths";
import { useTranslation } from "react-i18next";
import { Typography, Link, Box } from "@mui/material";
import NextLink from "next/link";
import { PageContainer } from "@/ui/PageContainer";

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <PageContainer isCentered={true}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "self-start",
          rowGap: "1.5rem",
          maxWidth: 475,
        }}
      >
        <Typography variant="h1">{t("pages.main.chatie")}</Typography>

        <Typography variant="body1">
          {t("pages.main.chatieDescription")}
        </Typography>

        <Link href={paths.signin} component={NextLink}>
          <Typography variant="body2">{t("pages.main.goToSignIn")}</Typography>
        </Link>
      </Box>
    </PageContainer>
  );
}

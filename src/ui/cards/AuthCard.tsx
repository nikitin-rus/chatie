import { Card, Switch, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface AuthCardProps extends PropsWithChildren {
  title: string;
}

export function AuthCard({ title, children }: AuthCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "2rem",
        maxWidth: "375px",
        width: "100%",
        p: "2rem",
        borderRadius: "15px",
      }}
    >
      <Typography variant="h2">{title}</Typography>

      {children}
    </Card>
  );
}

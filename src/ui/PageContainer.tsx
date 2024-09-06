import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isCentered?: boolean;
}

export function PageContainer({ isCentered = false, children }: Props) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: isCentered ? "center" : "stretch",
        justifyContent: isCentered ? "center" : "flex-start",
        width: "100vw",
        height: "100vh",
      }}
    >
      {children}
    </Container>
  );
}

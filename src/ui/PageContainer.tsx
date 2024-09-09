import { Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isCentered?: boolean;
}

export function PageContainer({ isCentered = false, children }: Props) {
  return (
    <Container
      display="flex"
      flexDir="column"
      alignItems={isCentered ? "center" : "stretch"}
      justifyContent={isCentered ? "center" : "stretch"}
      width="100vw"
      height="100vh"
      maxWidth="container.xl"
    >
      {children}
    </Container>
  );
}

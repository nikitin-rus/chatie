import { Card, Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface AuthCardProps extends PropsWithChildren {
  title: string;
}

export function AuthCard({ title, children }: AuthCardProps) {
  return (
    <Card
      display="flex"
      flexDir="column"
      alignItems="center"
      rowGap="2rem"
      maxWidth="375px"
      width="100%"
      p="2rem"
      borderRadius="15px"
    >
      <Heading as="h1">{title}</Heading>
      {children}
    </Card>
  );
}

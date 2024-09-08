"use client";

import { theme } from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function ThemeProvider({ children }: PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

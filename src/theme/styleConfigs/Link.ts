import { defineStyleConfig } from "@chakra-ui/react";

export const Link = defineStyleConfig({
  variants: {
    default: {
      color: "blue.1",
    },
  },
  defaultProps: {
    variant: "default",
  },
});

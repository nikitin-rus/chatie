import { defineStyleConfig } from "@chakra-ui/react";

export const Card = defineStyleConfig({
  variants: {
    default: {
      container: {
        boxShadow: "none",
      },
    },
  },
  defaultProps: {
    variant: "default",
  },
});

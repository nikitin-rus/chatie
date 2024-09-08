import { defineStyleConfig } from "@chakra-ui/react";

export const FormLabel = defineStyleConfig({
  variants: {
    default: {
      fontWeight: 400,
    },
  },
  sizes: {
    default: {
      margin: 0,
    },
  },
  defaultProps: {
    size: "default",
    variant: "default",
  },
});

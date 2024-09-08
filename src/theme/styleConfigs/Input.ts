import { defineStyleConfig } from "@chakra-ui/react";

export const Input = defineStyleConfig({
  variants: {
    default: {
      field: {
        outline: "blue.1",
        background: "grayscale.2",
      },
    },
  },
  sizes: {
    default: {
      field: {
        borderRadius: "15px",
        padding: "1rem 1.25rem",
        height: "auto",
      },
    },
  },
  defaultProps: {
    variant: "default",
    size: "default",
  },
});

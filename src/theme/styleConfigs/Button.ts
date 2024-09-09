import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    default: {
      background: "grayscale.2",

      _hover: {
        background: "grayscale.4",
      },

      _active: {
        background: "blue.1",
        color: "grayscale.1",
      },
    },
    active: {
      background: "blue.1",
      color: "grayscale.1",

      _hover: {
        background: "blue.2",
      },

      _active: {
        background: "blue.3",
      },
    },
  },
  sizes: {
    default: {
      height: "3.5rem",
      borderRadius: "15px",
      padding: "1rem 1.25rem",
    },
  },
  defaultProps: {
    variant: "default",
    size: "default",
  },
});

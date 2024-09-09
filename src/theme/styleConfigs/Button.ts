import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    default: {
      background: "grayscale.2",

      _hover: {
        background: "grayscale.4",
      },

      _active: {
        background: "grayscale.5",
      },
    },
    active: {
      background: "blue.1",
      color: "grayscale.1",
      fill: "grayscale.1",

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
    iconDefault: {
      width: "2.5rem",
      height: "2.5rem",
    },
    iconBig: {
      width: "3.5rem",
      minWidth: "3.5rem",
      maxWidth: "3.5rem",
      height: "3.5rem",
      minHeight: "3.5rem",
      maxHeight: "3.5rem",
    },
  },
  defaultProps: {
    variant: "default",
    size: "default",
  },
});

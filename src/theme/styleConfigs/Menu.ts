import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys
);

export const Menu = defineMultiStyleConfig({
  variants: {
    default: {
      list: {
        overflow: "hidden",
        boxShadow: "2xl",
      },
      item: {
        background: "grayscale.2",

        _hover: {
          background: "grayscale.4",
        },

        _active: {
          background: "grayscale.5",
        },
      },
    },
  },
  sizes: {
    default: {
      list: {
        borderRadius: "15px",
        p: 0,
      },
      item: {
        p: "1rem",
      },
    },
  },
  defaultProps: {
    variant: "default",
    size: "default",
  },
});

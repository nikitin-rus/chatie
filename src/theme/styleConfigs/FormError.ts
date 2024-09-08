import { formErrorAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  formErrorAnatomy.keys
);

export const FormError = defineMultiStyleConfig({
  sizes: {
    default: {
      text: {
        margin: 0,
      },
    },
  },
  defaultProps: {
    size: "default",
  },
});

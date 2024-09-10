import { extendTheme } from "@chakra-ui/react";
import { Button } from "./styleConfigs/Button";
import { Input } from "./styleConfigs/Input";
import { Link } from "./styleConfigs/Link";
import { Card } from "./styleConfigs/Card";
import { FormError } from "./styleConfigs/FormError";
import { FormLabel } from "./styleConfigs/FormLabel";
import { Menu } from "./styleConfigs/Menu";

export const theme = extendTheme({
  styles: {
    global: {
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      body: {
        background: "grayscale.3",
      },
    },
  },
  components: {
    Button,
    Input,
    Link,
    FormLabel,
    FormError,
    Card,
    Menu,
  },
  textStyles: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: "140%",
    },
    body2: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: "140%",
    },
    body3: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "140%",
    },
    body4: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "140%",
    },
    body5: {
      fontSize: "0.625rem",
      fontWeight: 400,
      lineHeight: "140%",
    },
    message1: {
      fontSize: "1.5rem",
      lineHeight: "180%",
    },
    message2: {
      fontSize: "1.25rem",
      lineHeight: "180%",
    },
  },
  colors: {
    blue: {
      1: "#3795BD",
      2: "#4E31AA",
      3: "#3A1078",
    },
    grayscale: {
      1: "#FFFFFF",
      2: "#F7F7F8",
      3: "#F1F1F1",
      4: "#DEDEDE",
      5: "#C9C9C9",
      6: "#9B9B9B",
      7: "#393939",
      8: "#000000",
    },
  },
});

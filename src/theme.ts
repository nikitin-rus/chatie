import { createTheme } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const theme = createTheme({
  palette: {
    background: {
      default: "#F1F1F1",
    },
    primary: {
      main: "#3795BD",
    },
  },
  typography: {
    ...inter.style,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "h1" },
              style: {
                fontSize: "2.5rem",
                fontWeight: 700,
              },
            },
            {
              props: { variant: "h2" },
              style: {
                fontSize: "2rem",
                fontWeight: 700,
              },
            },
            {
              props: { variant: "h3" },
              style: {
                fontSize: "1.5rem",
                fontWeight: 700,
              },
            },
            {
              props: { variant: "h4" },
              style: {
                fontSize: "1.25rem",
                fontWeight: 700,
              },
            },
            {
              props: { variant: "body1" },
              style: {
                fontSize: "1.5rem",
                fontWeight: 400,
                lineHeight: "140%",
              },
            },
            {
              props: { variant: "body2" },
              style: {
                fontSize: "1.25rem",
                fontWeight: 400,
                lineHeight: "140%",
              },
            },
            {
              props: { variant: "body3" },
              style: {
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "140%",
              },
            },
          ],
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: "140%",
          textTransform: "none",
          padding: "1rem 1.25rem",
          borderRadius: "15px",
          boxShadow: "none",

          ":hover, :active": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },
        input: {
          padding: "1rem 1.25rem",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
});

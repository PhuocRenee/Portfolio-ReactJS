import { experimental_sx as sx } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const themeColors = {
  primary: "#314052",

  secondary: "#8691AE",

  third: "#D9D9D9",
};

export const theme = createTheme({
  palette: {
    primary: { main: themeColors.third },
    first: {
      main: themeColors.primary,
    },
    second: {
      main: themeColors.secondary,
    },
    third: {
      main: themeColors.third,
    },
  },
  spacing: 9,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
  typography: {
    paragraph: {
      fontFamily: "Roboto",
    },
    h6: {
      color: themeColors.primary,
      backgroundColor: "transparent",
      textAlign: "center",
      paddingTop: 10,
      marginBottom: 5,
    },
    h5: {
      color: "white",
      backgroundColor: "transparent",
      textAlign: "center",
      marginBottom: 27,
    },
    h4: { fontFamily: "MoskMed" },
    h3: {},
    h2: {},
    h1: {
      fontFamily: "MoskBold",
      letterSpacing: ".3rem",
      color: "white",
      textDecoration: "none",
      fontSize: "10rem",
      position: "relative",
      textAlign: "justify",
      textJustify: "inter-word",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "project-card" },
          style: {
            textAlign: "center",
            textTransform: "uppercase",
            color: themeColors.primary,
            backgroundColor: themeColors.secondary,
            border: `2px solid ${themeColors.primary}`,
            margin: 2,
            fontWeight: 400,
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: sx({
          transform: "scale(1.3)",
        }),
        avatar: sx({
          backgroundColor: "white",
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        img: sx({
          objectFit: "contain",
          margin: "4px",
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: sx({
          maxWidth: "100vw",
          // eslint-disable-next-line
          ["@media (min-width:1280px)"]: {
            maxWidth: "100vw",
          },
          // eslint-disable-next-line
          ["@media (min-width:600px)"]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        }),
      },
      variants: [
        {
          props: { variant: "row" },
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          },
        },
        {
          props: { variant: "column" },
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          },
        },
        {
          props: { variant: "section-container" },
          style: {
            backgroundColor: themeColors.secondary,
            borderRadius: "0 0 15px 15px",
            paddingTop: 30,
            paddingBottom: 30,
          },
        },
        {
          props: { variant: "section-dark" },
          style: {
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #495c72 1px, transparent 0)",
            backgroundSize: "40px 40px",
            backgroundPosition: "left 20px top 20px",
            borderRadius: "0 0 15px 15px ",
            backgroundColor: themeColors.primary,
            paddingTop: 30,
            paddingBottom: 40,
          },
        },
      ],
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "project" },
          style: {
            height: "100%",
            width: 350,
            border: "2px",
            borderRadius: 15,
            backgroundColor: themeColors.third,
            padding: 7,
          },
        },
        {
          props: { variant: "about-project" },
          style: {
            borderRadius: 15,
            backgroundColor: themeColors.third,
            marginBottom: 27,
            paddingTop: 3,
          },
        },
        {
          props: { variant: "about-image" },
          style: {
            borderRadius: 15,
            backgroundColor: themeColors.third,
            marginBottom: 27,
            paddingTop: 3,
          },
        },
        {
          props: { variant: "about-card" },
          style: {
            borderRadius: 15,
            backgroundColor: themeColors.third,
            opacity: "60%",
            padding: "2rem",
            minHeight: "100%",
            minWidth: "80%",
            maxWidth: "80%",
          },
        },
      ],
    },
  },
});

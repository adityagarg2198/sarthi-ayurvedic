import { createTheme } from "@mui/material/styles";

const hospitalTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        background: {
          default: "#D6EAF8",
          paper: "#fff",
        },
        primary: {
          main: "#2C3E50",
          dark: "#5DADE2",
        },
        text: {
          primary: "#2C3E50",
          secondary: "#5DADE2",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontSize: "6rem",
    },
    h2: {
      fontSize: "4.5rem",
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "2.4rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "3.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.8rem",
    },
    body2: {
      fontSize: "1.6rem",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#2C3E50 !important",
        },
        fontSizeMedium: {
          fontSize: "3rem",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "10rem",
          justifyContent: "center",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          nav: {
            paddingTop: "5rem",
          },
        },
        docked: {
          width: "25rem",
          maxWidth: "25rem",
        },
        paper: {
          width: "25rem",
          maxWidth: "25rem",
          border: "none",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          margin: "0.5rem 0",
          "&.Mui-selected": {
            background: "#D6EAF8",
            "& .MuiTypography-root": {
              color: "#5DADE2 !important",
            },
            "& .MuiSvgIcon-root": {
              color: "#5DADE2 !important",
            },
          },
          "&.Mui-selected:hover": {
            background: "#D6EAF8",
          },
          "&:hover": {
            background: "#D6EAF8",
            color: "#5DADE2 !important",
            "& .MuiSvgIcon-root": {
              color: "#5DADE2 !important",
            },
          },
        },
      },
    },
  },
});

export default hospitalTheme;

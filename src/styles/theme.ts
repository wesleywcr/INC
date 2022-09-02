import { createTheme } from "@mui/material";

export const theme = createTheme({
  shape: {
    borderRadius: 10,
  },
  palette: {
    primary: {
      main: '#1111ff',
      light: '#f2f2f2',
      dark: '#14C38E',
      contrastText: '#fff',
    },
    secondary: {
      main: '#6f51ed',
      light: '#fff',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
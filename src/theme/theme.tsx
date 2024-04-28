import { createTheme } from '@mui/material/styles';

// Create a theme object
const theme = createTheme({
  palette: {
    primary: {
      main: '#729786',
      light: '#C4D4CD',
      dark: '#2B3B34',
    },
    secondary: {
      main: '#64748b',
      light: 'white',
      dark: '#1e293b',
    },
  },
});

export default theme;

import { createTheme } from '@mui/material/styles';

// Create a theme object
const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6',
      light: '#bfdbfe',
      dark: '#1e40af',
    },
    secondary: {
      main: '#64748b',
      light: 'white',
      dark: '#1e293b',
    },
  },
});

export default theme;

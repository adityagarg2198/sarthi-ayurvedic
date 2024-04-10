import { ThemeProvider } from '@mui/material';
import Header from './components/Header/Header.component';
import theme from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;

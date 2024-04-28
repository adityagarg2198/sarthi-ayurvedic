import { ThemeProvider } from '@mui/material';
import Header from './components/Header/Header.component';
import theme from './theme/theme';
import HeroSection from './components/HeroSection/HeroSection.component';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection />
    </ThemeProvider>
  );
};

export default App;

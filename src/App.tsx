import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MobileView from './components/MobileView';
import { ThemeProvider } from 'styled-components';
import theme from './designs/theme';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <MobileView>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MobileView>
  );
};

export default App;
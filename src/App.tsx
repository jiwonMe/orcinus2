import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MobileView from './components/MobileView';
import { ThemeProvider } from 'styled-components';
import theme from './designs/theme';

const App = () => {
  return (
    <MobileView>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>none</>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MobileView>
  );
};

export default App;
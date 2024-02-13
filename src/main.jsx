import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Signup } from './pages/Signup';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { Profile } from './pages/Profile';
import { New } from './pages/New';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <New />
    </ThemeProvider>
  </React.StrictMode>,
)

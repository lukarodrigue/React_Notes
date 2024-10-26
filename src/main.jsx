import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import  { SingIn }  from './pages/Singin';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <SingIn></SingIn>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
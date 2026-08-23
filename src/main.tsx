import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { AppThemeProvider } from './providers/AppThemeProvider';
import { store } from './store/store';
import { GlobalStyle } from './styles/GlobalStyle';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppThemeProvider>
          <GlobalStyle />
          <App />
        </AppThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);

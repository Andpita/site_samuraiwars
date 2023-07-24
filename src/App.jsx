/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { StrictMode } from 'react';
import Rotas from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Menu />
          <Rotas />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';

import './assets/fonts/peyda.css';

import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <HelmetProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </ProductsContextProvider>
    </HelmetProvider>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import './index.css';

// HashRouter is used intentionally: GitHub Pages serves static files only,
// so a BrowserRouter would 404 on refresh/direct links to routes like
// /product/:slug. HashRouter keeps all routing client-side (/#/product/h3),
// which always resolves correctly on GitHub Pages.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </HashRouter>
  </React.StrictMode>
);

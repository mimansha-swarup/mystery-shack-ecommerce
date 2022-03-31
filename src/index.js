import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  FilterProvider,
  ProductsProvider,
  CategoriesProvider,
  AuthProvider,
  WishlistProvider,
} from "./Context";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <WishlistProvider>
        <CategoriesProvider>
          <FilterProvider>
            <ProductsProvider>
              <App />
            </ProductsProvider>
          </FilterProvider>
        </CategoriesProvider>
      </WishlistProvider>
    </AuthProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

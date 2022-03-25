import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider, ProductsProvider,CategoriesProvider } from "./Context";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <FilterProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </FilterProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

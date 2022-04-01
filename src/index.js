import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import ProviderWrapper from "./Helper/ProviderWrapper";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderWrapper>
        <App />
      </ProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

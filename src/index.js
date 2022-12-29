import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Font roboto para material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SearchContextProvider from "./contex/contexSearch";
import FavoriteContextProvider from "./contex/contexFavorite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <SearchContextProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </BrowserRouter>
  </SearchContextProvider>
  
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Import our custom CSS
import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

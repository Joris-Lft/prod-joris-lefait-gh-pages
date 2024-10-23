import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DocumentationProvider } from "./contexts/displayDocumentation";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <DocumentationProvider>
        <App />
      </DocumentationProvider>
    </ThemeProvider>
  </StrictMode>
);

import { render } from "react-dom";
import App from "./App";
import { DocumentationProvider } from "./contexts/displayDocumentation";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";

render(
  <ThemeProvider>
    <DocumentationProvider>
      <App />
    </DocumentationProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

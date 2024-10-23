import React, { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Documentation from "./components/Documentation/Documentation";
import "./App.css";
import { DisplayDocumentationContext } from "./contexts/displayDocumentation";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [{ displayDocumentation }] = useContext(DisplayDocumentationContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      {!displayDocumentation ? (
        <>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      ) : (
        <Documentation />
      )}

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;

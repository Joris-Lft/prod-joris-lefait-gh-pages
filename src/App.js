import { useContext } from "react";
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
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Route>
          <Route path="/documentation">
            <Documentation />
          </Route>
        </Switch>
      </BrowserRouter>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;

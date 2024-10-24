import { useContext, useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../contexts/theme";
import { DisplayDocumentationContext } from "../../contexts/displayDocumentation";
import { projects, skills, contact } from "../../portfolio";
import "./Navbar.css";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [{ displayDocumentation, toggleDocumentation }] = useContext(
    DisplayDocumentationContext
  );
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {!displayDocumentation ? (
          <>
            {projects.length ? (
              <li className="nav__list-item">
                <a
                  href="#projects"
                  onClick={() => {
                    toggleDocumentation(false);
                    toggleNavList();
                  }}
                  className="link link--nav"
                >
                  Projects
                </a>
              </li>
            ) : null}

            {skills.length ? (
              <li className="nav__list-item">
                <a
                  href="#skills"
                  onClick={() => {
                    toggleDocumentation(false);
                    toggleNavList();
                  }}
                  className="link link--nav"
                >
                  Skills
                </a>
              </li>
            ) : null}

            {contact.email ? (
              <li className="nav__list-item">
                <a
                  href="#contact"
                  onClick={() => {
                    toggleDocumentation(false);
                    toggleNavList();
                  }}
                  className="link link--nav"
                >
                  Contact
                </a>
              </li>
            ) : null}
          </>
        ) : (
          <li className="nav__list-item">
            <a
              href="/"
              onClick={() => {
                toggleNavList();
              }}
              className="link link--nav cursor"
            >
              home
            </a>
          </li>
        )}
        <li className="nav__list-item">
          <span
            href=""
            onClick={() => {
              toggleDocumentation(true);
              window.history.pushState("", "Documentation", "/doc");
              toggleNavList();
            }}
            className="link link--nav cursor"
          >
            Documentation
          </span>
        </li>
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;

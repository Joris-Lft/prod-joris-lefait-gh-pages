import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const DisplayDocumentationContext = createContext();

const DocumentationProvider = ({ children }) => {
  const [displayDocumentation, setDisplayDocumentation] = useState(false);

  useEffect(() => {
    const isDocumentationDisplayed =
      localStorage.getItem("displayDocumentation") === false;
    if (isDocumentationDisplayed) setDisplayDocumentation(false);
  }, []);

  const toggleDocumentation = (isDisplayed) => {
    localStorage.setItem("displayDocumentation", isDisplayed);
    setDisplayDocumentation(isDisplayed);
  };

  return (
    <DisplayDocumentationContext.Provider
      value={[{ displayDocumentation, toggleDocumentation }]}
    >
      {children}
    </DisplayDocumentationContext.Provider>
  );
};

DocumentationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DocumentationProvider, DisplayDocumentationContext };

import { docs } from "../../portfolio";
import "./Documentation.css";
const Documentation = () => {
  return (
    <div className="section documentation" id="documentation">
      <h2 className="section__title">Documentation</h2>

      <p className="documentation__desc">
        Here are some docs I wrote during projects or proof of concept. You can
        download them in pdf, I hope they will help you !
      </p>

      <ul className="documentation__list">
        {docs.map((doc, index) => {
          return (
            <li key={doc.name + index} className="documentation__list__item">
              <a href={doc.path} target="_blank">
                {">"} {doc.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Documentation;

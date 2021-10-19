import { docs } from "../../portfolio";
import "./Documentation.css";
const Documentation = () => {
  return (
    <div className="section documentation center" id="documentation">
      <h2 className="section__title">Documentation</h2>

      <p className="documentation__desc">
        Here are some docs I wrote during projects or proof of concept
      </p>

      <ul className="documentation__list">
        {docs.map((doc) => {
          return (
            <li>
              <a href={doc.path}>{doc.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Documentation;

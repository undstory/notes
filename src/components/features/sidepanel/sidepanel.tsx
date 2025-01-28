import React from "react";
import "./sidepanel.scss";
import Logo from "../logo/logo";
import withMediaQuery from "../../../hoc/withMediaQuery";

const LogoComponent = withMediaQuery(Logo, "(min-width: 1024px)");

const Sidepanel: React.FC = () => {
  return (
    <div className="sidepanel sidepanel-wrapper">
      <LogoComponent />

      <div className="sidepanel-content">
        <div className="sidepanel-menu">
          <button>AllNotes</button>
          <button>Archived Notes</button>
        </div>
        <div className="tags-wrapper">
          <h3>Tags</h3>
          <button>React</button>
        </div>
      </div>
    </div>
  );
};

export default Sidepanel;

import React from "react";
import "./sidepanel.scss";
import Logo from "../logo/logo";
import withMediaQuery from "../../hoc/withMediaQuery";

const LogoComponent = withMediaQuery(Logo, "(min-width: 1024px)");

const Sidepanel: React.FC = () => {
  return (
    <div className="sidepanel sidepanel-wrapper">
      <LogoComponent />
    </div>
  );
};

export default Sidepanel;

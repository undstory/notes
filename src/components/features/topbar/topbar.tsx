import React from "react";
import "./topbar.scss";
import { ReactComponent as IconSettingsSvg } from "../../../assets/images/icon-settings.svg";
import { Searchinput } from "../search-input";
// import withMediaQuery from "../../hoc/withMediaQuery";

// const LogoComponent = withMediaQuery(Logo, "(min-width: 1024px)");

const Topbar: React.FC = () => {
  return (
    <div className="topbar-wrapper">
      <h2 className="topbar-header">All Notes</h2>
      <div className="search-wrapper">
        <Searchinput />
        <IconSettingsSvg className="icon-settings" />
      </div>
    </div>
  );
};

export default Topbar;

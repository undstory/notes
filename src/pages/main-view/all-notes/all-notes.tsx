import React from "react";
import { Sidepanel } from "../../../components/sidepanel";
import withMediaQuery from "../../../hoc/withMediaQuery";
import Logo from "../../../components/logo/logo";
import { ReactComponent as IconSettingsSvg } from "../../../assets/images/icon-settings.svg";
import "./all-notes.scss";

const AllNotes: React.FC = () => {
  const LogoComponent = withMediaQuery(Logo, "(max-width: 1023px)");

  return (
    <div className="sidepanel">
      <Sidepanel />
      <div className="content">
        <LogoComponent />
        <div className="topbar">
          <h2>All Notes</h2>
          <div className="searchbar">
            <input />
            <IconSettingsSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNotes;

import React from "react";
import { Sidepanel } from "../../../components/features/sidepanel";
import withMediaQuery from "../../../hoc/withMediaQuery";
import Logo from "../../../components/features/logo/logo";
import "./all-notes.scss";
import { Topbar } from "../../../components/features/topbar";

const AllNotes: React.FC = () => {
  const LogoComponent = withMediaQuery(Logo, "(max-width: 1023px)");
  const TopbarDesktop = withMediaQuery(Topbar, "(min-width: 1024px)");

  return (
    <div className="sidepanel">
      <Sidepanel />
      <div className="content">
        <LogoComponent />
        <TopbarDesktop />
      </div>
      <div className="wrapper-small-screen">
        <h2 className="topbar-header-small-screen">All Notes</h2>
      </div>
    </div>
  );
};

export default AllNotes;

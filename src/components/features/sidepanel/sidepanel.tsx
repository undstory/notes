import React, { useState } from "react";
import "./sidepanel.scss";
import Logo from "../logo/logo";
import withMediaQuery from "../../../hoc/withMediaQuery";
import Button from "../../ui/button/button";
import { ReactComponent as HomeSvg } from "../../../assets/images/icon-home.svg";
import { ReactComponent as ArchiveSvg } from "../../../assets/images/icon-archive.svg";
import { ReactComponent as ChevronRightSvg } from "../../../assets/images/icon-chevron-right.svg";

const LogoComponent = withMediaQuery(Logo, "(min-width: 1024px)");

const Sidepanel: React.FC = () => {

  const [activeTab, setActiveTab ] = useState<string>('allNotes')
const handleActiveTab = (tab: string) => {
  setActiveTab(tab)
}

  return (
    <div className="sidepanel sidepanel-wrapper">
      <LogoComponent />

      <div className="sidepanel-content">
        <div className="menu-wrapper">

          <Button
            variant="nav"
            className={`menu-btn ${activeTab === 'allNotes' ? 'active' :''}`}
            onClick={() => handleActiveTab('allNotes')}
            >
            <HomeSvg className={`icon ${activeTab === 'allNotes'? "active-icon" : ""}`} />
            All Notes
            {
              activeTab === 'allNotes' ? (
                <ChevronRightSvg className="chevron-icon"/>
              ) : null
            }
          </Button>
            <Button variant="nav"
             className={`menu-btn ${activeTab === 'archiveNotes' ? 'active' :''}`}
             onClick={() => handleActiveTab('archiveNotes')}
            >
            <ArchiveSvg className={`icon ${activeTab === 'archiveNotes' ? "active-icon" : ""}`}  />
            Archived Notes
            {
              activeTab === 'archiveNotes' ? (
                <ChevronRightSvg className="chevron-icon"/>
              ) : null
            }
            </Button>

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

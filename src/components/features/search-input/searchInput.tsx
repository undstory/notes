import React from "react";
import "./searchInput.scss";
import { ReactComponent as IconSearchSvg } from "../../../assets/images/icon-search.svg";

const Searchinput: React.FC = () => {
  return (
    <div className="input-container">
      <input
        className="input-styles"
        placeholder="Search by title, content or tags..."
      />
      <IconSearchSvg className="icon-search" />
    </div>
  );
};

export default Searchinput;

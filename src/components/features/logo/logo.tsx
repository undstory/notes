import React from "react";
import "./logo.scss";
import { ReactComponent as LogoSvg } from "../../../assets/images/logo.svg";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <LogoSvg />
    </div>
  );
};

export default Logo;

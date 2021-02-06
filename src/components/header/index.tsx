import React, { FunctionComponent } from "react";
import "./index.scss";

import profileTop from "../../assets/profileTop.png";
import hondoLogo from "../../assets/hondoLogo.png";
import hamburger from "../../assets/hamburger.png";

const Header: FunctionComponent = () => {
  return (
    <div className="header-container">
      <div className="status-bar"></div>
      <div className="header-menu">
        <img src={hamburger} />
        <img src={hondoLogo} />
        <img src={profileTop} />
      </div>
    </div>
  );
};

export default Header;

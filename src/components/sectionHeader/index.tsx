import React, { FunctionComponent } from "react";
import './index.scss';

interface Props {
  title: string;
  barColor: string;
}

const Header: FunctionComponent<Props> = ({ title, barColor }) => {
  return (
    <div className="sub-header-container">
      <div className="header-text">{title}</div>
      <div className="bar" style={{ backgroundColor: barColor}}/>
    </div>
  );
};

export default Header;

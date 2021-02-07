import React, { FunctionComponent } from "react";
import { getFont } from "../../constants";
import './index.scss';

interface Props {
  title: string;
  barColor: string;
}

const Header: FunctionComponent<Props> = ({ title, barColor }) => {
  return (
    <div className="sub-header-container">
      <div className="header-text" style={{ fontSize: getFont(75)}}>{title}</div>
      <div className="bar" style={{ backgroundColor: barColor}}/>
    </div>
  );
};

export default Header;

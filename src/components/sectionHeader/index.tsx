import React, { FunctionComponent, CSSProperties } from "react";
import "./index.scss";

interface Props {
  title: string;
  barStyle?: CSSProperties;
  fontSize?: string;
}

const Header: FunctionComponent<Props> = ({
  title,
  barStyle,
  fontSize = "24px",
}) => {
  return (
    <div className="sub-header-container">
      <div className="header-text" style={{ fontSize }}>
        {title}
      </div>
      <div className="bar" style={barStyle} />
    </div>
  );
};

export default Header;

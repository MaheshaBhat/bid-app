import React, {
  CSSProperties,
  FunctionComponent,
  useState,
  useEffect,
} from "react";
import "./index.scss";

import profileTop from "../../assets/profileTop.png";
import hondoLogo from "../../assets/hondoLogo.png";
import hamburger from "../../assets/hamburger.png";

interface Props {
  style?: CSSProperties;
}
const Header: FunctionComponent<Props> = ({ style = {} }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 60000);
  }, []);

  return (
    <div className="header-container" style={style}>
      <div className="status-bar">
        {`${date.getHours()}.${date.getMinutes()}`}
      </div>
      <div className="header-menu">
        <img src={hamburger} />
        <img src={hondoLogo} />
        <img src={profileTop} />
      </div>
    </div>
  );
};

export default Header;

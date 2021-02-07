import React, { FunctionComponent, CSSProperties } from "react";

import "./index.scss";

interface Props {
  btnStyle?: CSSProperties;
  label?: string;
  active?: boolean;
  onPress?: (arg: boolean) => void;
}

const RoundButton: FunctionComponent<Props> = ({
  btnStyle = {},
  label = "",
  active = false,
  onPress = () => {},
}) => {
  //   const [isBtnClicked, handleButtonClick] = useState(active);
  return (
    <div
      className={`round-button ${active ? "active" : ""}`}
      style={btnStyle}
      onClick={() => onPress(active)}
    >
      <div className="round-button-text">{label}</div>
    </div>
  );
};

export default RoundButton;

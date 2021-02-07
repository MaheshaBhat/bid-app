import React, { FunctionComponent, CSSProperties } from "react";

import "./index.scss";

interface Props {
  btnStyle?: CSSProperties;
  label?: string;
  onPress?: () => void;
}

const Button: FunctionComponent<Props> = ({
  btnStyle = {},
  label = "",
  onPress = () => {},
}) => {
  return (
    <div
      className='button-container'
      style={btnStyle}
      onClick={() => onPress()}
    >
      <div className="button-text">{label}</div>
    </div>
  );
};

export default Button;

import React, { FunctionComponent, CSSProperties } from "react";
import { scale } from "../../constants";

import "./index.scss";

interface Props {
  title: string;
  subTitle: string;
  cardStyle: CSSProperties;
}

const Card: FunctionComponent<Props> = ({
  title,
  subTitle,
  children,
  cardStyle,
}) => {
  return (
    <div className="card-container" style={cardStyle}>
      <div className="card-header">
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;

import React, { FunctionComponent } from "react";
import { scale } from "../../constants";

import "./index.scss";

interface Props {
  title: string;
  subTitle: string;
}

const Card: FunctionComponent<Props> = ({ title, subTitle, children }) => {
  return (
    <div
      className="card-container"
      //style={{ height: `${Math.max(scale * 0.34, 296)}px` }}
    >
      <div className="card-header">
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;

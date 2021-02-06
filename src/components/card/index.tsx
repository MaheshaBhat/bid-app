import React, { FunctionComponent } from "react";
import "./index.scss";

interface Props {
  title: string;
  subTitle: string;
}

const Card: FunctionComponent<Props> = ({ title, subTitle, children }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;

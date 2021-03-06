import React, { FunctionComponent, useState } from "react";

import hide from "../../assets/hide.svg";
import more from "../../assets/more.svg";
import profile from "../../assets/profile.png";
import { scale } from "../../constants";
// import group from "../../assets/group.svg";
// import truck from "../../assets/truck.svg";
// import payment from "../../assets/payment.svg";
import "./index.scss";

const images = require.context("../../assets", true);

const CardDetail: FunctionComponent = () => {
  let specificData = [
    { label: "Specification 01", icon: "group" },
    { label: "Specification 02", icon: "truck" },
    { label: "Specification 03", icon: "payment" },
  ];

  const offset = scale * 0.023;
  const [isDetailVisible, toggleDetail] = useState(true);
  return (
    <>
      <div className="card-item-container">
        {specificData.map(({ label, icon }, i) => (
          <div
            className="card-item"
            key={i}
            style={{
              height: `${Math.max(offset, 20)}px`,
              marginBottom: `${Math.max(offset / 2, 10)}px`,
            }}
          >
            <span>
              <img src={images(`./${icon}.svg`).default} alt="" />
            </span>
            <div>{label}</div>
          </div>
        ))}
      </div>
      {isDetailVisible && (
        <div className="description">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        </div>
      )}
      <div className="hide-detail">
        <div className="hide-detail-text">
          {isDetailVisible ? "Hide Details" : "More Details"}
        </div>
        <span
          className="arrow"
          onClick={() => toggleDetail((detail) => !detail)}
        >
          <img src={isDetailVisible ? hide : more} alt="" />
        </span>
      </div>
      <div className="card-user">
        <img src={profile} alt="" />
        <div className="title-container">
          <div className="title">{"Rohan Sharma"}</div>
          <div className="sub-title">{"Bangalore, Karnataka"}</div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;

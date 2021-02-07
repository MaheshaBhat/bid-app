import React, { FunctionComponent, useState } from "react";

import "./index.scss";

import SectionHeader from "../sectionHeader";
import dollar from "../../assets/dollar.svg";


const BidForm: FunctionComponent = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="bid-form">
      <SectionHeader
        title={"Place Your Load Bid"}
        fontSize={"18px"}
        barStyle={{
          backgroundColor: "rgba(48, 84, 214, 1)",
          width: "60px",
          height: "3px",
          marginTop: 0,
        }}
      />
      <div
        className="bid-amount-container"
        style={{
          justifyContent:
            amount.toString().replace(",", "").length > 7 ? "left" : "center",
        }}
      >
        <img src={dollar} />
        <input
          className="bid-amount"
          value={amount}
          placeholder="0"
          pattern="[0-9]+([\,][0-9]+)?"
          min="0"
          max="5"
          style={{
            width: `${
              amount != "" ? 32 * amount.toString().replace(",", "").length : 32
            }px`,
            opacity: amount != "" ? 1 : 0.12,
          }}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BidForm;

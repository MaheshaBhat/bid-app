import React, { FunctionComponent } from "react";

import "./index.scss";

import SectionHeader from "../sectionHeader";

const BidForm: FunctionComponent = () => {

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
    </div>
  );
};

export default BidForm;

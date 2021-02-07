import React, { useEffect, useCallback, useState } from "react";

import "./App.scss";
import Header from "./components/header";
import SectionHeader from "./components/sectionHeader";

import LayoutProvider from "./context";
import Card from "./components/card";
import CardDetail from "./components/cardDetail";
import BidForm from "./components/bidForm";
import Button from "./components/Button";

import { getNumber, scale } from "./constants";

const offset: number = 0.05 * scale;

function App() {
  return (
    <LayoutProvider>
      <div className="App">
        <Header
          style={{
            paddingLeft: offset,
            paddingRight: offset,
            height: getNumber(27),
          }}
        />
        <div
          className="app-body"
          style={{ paddingLeft: offset, paddingRight: offset }}
        >
          <SectionHeader
            title={"Old Car Available"}
            barStyle={{ backgroundColor: "#3054D6" }}
          />
          <Card
            title={"Honda City"}
            subTitle={"Posted at Nov, 9.30 AM"}
            cardStyle={{ marginBottom: "30px" }}
          >
            <CardDetail />
          </Card>
          <BidForm />
          <Button
            label="Bid Now"
            btnStyle={{ marginTop: "14px", marginBottom: "36px" }}
          />
        </div>
      </div>
    </LayoutProvider>
  );
}

export default App;

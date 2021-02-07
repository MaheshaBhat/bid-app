import React, { useEffect, useCallback, useState } from "react";

import "./App.scss";
import Header from "./components/header";
import SectionHeader from "./components/sectionHeader";
import LayoutProvider from "./context";
import Card from "./components/card";
import CardDetail from "./components/cardDetail";

import { getNumber, scale } from "./constants";

const offset: number = 0.05 * scale;

function App() {
  // const [previousOrientation, setPreviousOrientation] = useState(
  //   window.orientation
  // );

  // const checkOrientation = useCallback(() => {
  //   if (window.orientation !== previousOrientation) {
  //     // orientation changed
  //     setPreviousOrientation(window.orientation);
  //     console.log("set");
  //   }
  // }, [previousOrientation]);

  // useEffect(() => {
  //   let supportsOrientationChange = "onorientationchange" in window,
  //     orientationEvent = supportsOrientationChange
  //       ? "orientationchange"
  //       : "resize";
  //   window.addEventListener(orientationEvent, checkOrientation, false);

  //   //return window.removeEventListener(orientationEvent, checkOrientation);
  // }, []);

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
          <SectionHeader title={"Old Car Available"} barColor={"#3054D6"} />
          <Card title={"Honda City"} subTitle={"Posted at Nov, 9.30 AM"}>
            <CardDetail />
          </Card>
        </div>
      </div>
    </LayoutProvider>
  );
}

export default App;

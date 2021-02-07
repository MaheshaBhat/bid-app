import React from "react";

import "./App.scss";
import Header from "./components/header";
import SectionHeader from "./components/sectionHeader";
import LayoutProvider from "./context";

import { widthFactor, width } from "./constants";

const offset: number = 0.05 * width * widthFactor;

function App() {
  return (
    <LayoutProvider>
      <div className="App">
        <Header style={{ paddingLeft: offset, paddingRight: offset }} />
        <SectionHeader title={"Old Car Available"} barColor={"#3054D6"} />
      </div>
    </LayoutProvider>
  );
}

export default App;

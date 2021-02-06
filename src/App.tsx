import React from "react";

import "./App.scss";
import Header from "./components/header";
import SectionHeader from "./components/sectionHeader";
import Card from "./components/card";
import CardDetail from "./components/cardDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionHeader title={"Old Car Available"} barColor={"#3054D6"} />
      <Card title={"Honda City"} subTitle={"Posted at Nov, 9.30 AM"}>
        <CardDetail />
      </Card>
    </div>
  );
}

export default App;

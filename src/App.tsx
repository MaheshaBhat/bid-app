import React from "react";

import "./App.scss";
import Header from './components/header';
import SectionHeader from "./components/sectionHeader";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionHeader title={"Old Car Available"} barColor={"#3054D6"} />
    </div>
  );
}

export default App;

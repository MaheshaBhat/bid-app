import React from "react";

import "./App.scss";
import Header from "./components/header";
import SectionHeader from "./components/sectionHeader";
import BidForm from "./components/bidForm";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionHeader
        title={"Old Car Available"}
        barStyle={{ backgroundColor: "#3054D6" }}
      />
      <BidForm />
      <Button label="Bid Now" btnStyle={{ marginTop: '14px', marginBottom: '36px'}} />
    </div>
  );
}

export default App;

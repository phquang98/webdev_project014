import React, { FC } from "react";

import "./App.css";
import TestCompo from "./components/TestCompo";

const App: FC = () => {
  return (
    <div className="App">
      <p>Hello, testing ...</p>
      {/* Enable this line to check everything runs OK  */}
      <TestCompo coolname="Adam" youngage="20"></TestCompo>
    </div>
  );
};

export default App;

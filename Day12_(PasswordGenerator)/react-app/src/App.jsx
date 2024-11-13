// import React from "react";
import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="password-gen-area">
          <h1 className="title">Password Generator</h1>
          <PasswordGenerator />
        </div>
      </div>
    </>
  );
};

export default App;

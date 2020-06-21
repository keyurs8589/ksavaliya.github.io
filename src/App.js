import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContext from "./components/MainContext";

function App() {
  return (
    <div className="App container-flex">
      <Header />
      <MainContext />
    </div>
  );
}

export default App;

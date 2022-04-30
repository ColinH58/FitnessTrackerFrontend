import React from "react";
import './App.css';
import {
  HomePage,
  Activities,
  Routines,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <Activities />
      <Routines />
    </div>
  );
};

export default App;
import React from "react";
import './App.css';
import {
  HomePage,
  Activities,
  Routines,
  MyRoutines,
  Login,
  Register,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <Login />
        <Register />
      </nav>
      <HomePage />
      <Activities />
      <Routines />
      <MyRoutines />
    </div>
  );
};

export default App;
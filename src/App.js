import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  HomePage,
  Activities,
  Routines,
  MyRoutines,
  Login,
  Logout,
  Register,
  Navbar,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Routines" element={<Routines />} />
          <Route path="/MyRoutines" element={<MyRoutines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

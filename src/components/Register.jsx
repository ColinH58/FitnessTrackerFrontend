import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { accountCreation } from "../api";

const CreateAccount = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitInformation = async (e) => {
    e.preventDefault();
    await accountCreation(username, password);
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/posts");
     } else {
       console.log("Invalid Login, Try Again")
     }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="Register">
      <h2>Register</h2>
      <form onSubmit={submitInformation}>
        <input
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateAccount;
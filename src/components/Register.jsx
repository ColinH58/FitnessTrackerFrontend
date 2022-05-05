import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { accountCreation } from "../api";

const CreateAccount = ({ setLoggedIn }) => {
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
    const account = await accountCreation(username, password);
    console.log(account, "this is the account")
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/");
     } else {
       alert("Invalid Login, Try Again")
     }
    setUsername("");
    setPassword("");
    setLoggedIn(true);
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
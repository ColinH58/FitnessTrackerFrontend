import React, { useState } from "react";
import { accountCreation } from "../api";

const CreateAccount = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitInformation = async (e) => {
    e.preventDefault();
    if (password.length > 8) {
      const account = await accountCreation(username, password);
      setUsername("")
      setPassword("")
      setLoggedIn(true)
      return(account)
    } else {
      alert("Your Password needs to be at least 9 characters long")
    };
  }

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
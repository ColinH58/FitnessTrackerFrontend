import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmation) {
      alert("Password does not match");
      setPassword("");
      setConfirmation("");
    } else {
      const response = fetch(
        "https://fitnesstrac-kr.herokuapp.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          const token = result.token;
          localStorage.setItem("userToken", token);
        })
        .catch(console.error);
      setUsername("");
      setPassword("");
      setConfirmation("");
    }
  };

  return (
    <div className="Register">
      <h2 className="RegisterTitle">Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          minLength={2}
          required
        ></input>
        <input
          type="Password"
          placeholder="ReEnter Password"
          value={confirmation}
          onChange={(event) => {
            setConfirmation(event.target.value);
          }}
          minLength={2}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;

import React from "react";

const Logout = () => {
  const handleClick = () => {
    localStorage.clear("Token");
    // let accessToken = JSON.parse(localStorage.getItem("Token"));
    // console.log(accessToken);
  };

  return (
    <div className="Logout">
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default Logout;

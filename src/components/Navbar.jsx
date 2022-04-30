import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [displayVal, setDisplayVal] = useState(localStorage.getItem("token"));
  useEffect(() => {
    console.log("token navbar: ", localStorage.getItem("token"));
    setDisplayVal(localStorage.getItem("token"));
  }, [location]);

  const links = [
    {
      to: "/Activities",
      text: "Activites",
      shouldDisplay: true,
    },
    {
      to: "/Routines",
      text: "Routines",
      shouldDisplay: true,
    },
    {
      to: "/MyRoutines",
      text: "My Routines",
      shouldDisplay: true,
    },
    {
      to: "/Logout",
      text: "Log out",
      shouldDisplay: displayVal,
      onClick: () => localStorage.removeItem("token"),
    },
    {
      to: "/Register",
      text: "Register",
      shouldDisplay: !displayVal,
    },
    {
      to: "/Login",
      text: "Login",
      shouldDisplay: !displayVal,
    },
  ];
  return (
    <div className="Navbar">
      <Link className="NavTitle" to={"/HomePage"}>
        Fitness Tracker
      </Link>
      <div className="NavMenuItems">
        {links.map((link) => {
          const { to, text, shouldDisplay, onClick = () => {} } = link;
          if (shouldDisplay) {
            return (
              <div>
                <Link className="NavLink" to={to} onClick={onClick}>
                  {text}
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;

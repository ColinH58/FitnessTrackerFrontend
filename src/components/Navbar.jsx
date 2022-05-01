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
      route: "/Activities",
      placeholder: "Activites",
      shouldDisplay: true,
    },
    {
      route: "/Routines",
      placeholder: "Routines",
      shouldDisplay: true,
    },
    {
      route: "/MyRoutines",
      placeholder: "My Routines",
      shouldDisplay: true,
    },
    {
      route: "/Logout",
      placeholder: "Log out",
      shouldDisplay: displayVal,
      onClick: () => localStorage.removeItem("token"),
    },
    {
      route: "/Register",
      placeholder: "Register",
      shouldDisplay: !displayVal,
    },
    {
      route: "/Login",
      placeholder: "Login",
      shouldDisplay: !displayVal,
    },
  ];
  return (
    <div className="Navbar">
      <Link className="NavTitle" to={"/"}>
        Fitness Tracker
      </Link>
      <div className="NavMenuItems">
        {links.map((link) => {
          const { route, placeholder, shouldDisplay, onClick = () => {} } = link;
          if (shouldDisplay) {
            return (
              <div>
                <Link className="NavLink" to={route} onClick={onClick}>
                  {placeholder}
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

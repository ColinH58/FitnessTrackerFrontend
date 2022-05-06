import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, setLoggedIn }) => {
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
      shouldDisplay: loggedIn,
    },
    {
      route: "/Logout",
      placeholder: "Log out",
      shouldDisplay: loggedIn,
      onClick: () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
      },
    },
    {
      route: "/Register",
      placeholder: "Register",
      shouldDisplay: !loggedIn,
    },
    {
      route: "/Login",
      placeholder: "Login",
      shouldDisplay: !loggedIn,
    },
  ];
  return (
    <div className="Navbar">
      <Link className="NavTitle" to={"/"}>
        Fitness Tracker
      </Link>
      <div className="NavMenuItems">
        {links.map((link) => {
          const {
            route,
            placeholder,
            shouldDisplay,
            onClick = () => {},
          } = link;
          if (shouldDisplay) {
            return (
              <div>
                <Link className="NavLink" to={route} onClick={onClick}>
                  {placeholder}
                </Link>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;

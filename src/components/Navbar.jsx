import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const links = [
    {
      key: 1,
      route: "/Activities",
      placeholder: "Activites",
      shouldDisplay: true,
    },
    {
      key: 2,
      route: "/Routines",
      placeholder: "Routines",
      shouldDisplay: true,
    },
    {
      key: 3,
      route: "/MyRoutines",
      placeholder: "My Routines",
      shouldDisplay: loggedIn,
    },
    {
      key: 4,
      route: "/Logout",
      placeholder: "Log out",
      shouldDisplay: loggedIn,
      onClick: () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
      },
    },
    {
      key: 5,
      route: "/Register",
      placeholder: "Register",
      shouldDisplay: !loggedIn,
    },
    {
      key: 6,
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
            key,
            route,
            placeholder,
            shouldDisplay,
            onClick = () => {},
          } = link;
          if (shouldDisplay) {
            return (
              <div key={key}>
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

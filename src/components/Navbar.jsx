import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  // Load ThemeContext
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme === true ? light : dark;

  // Load AuthContext
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div className="navbar" style={style}>
      <h1>My Todo</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          {isAuthenticated ? "Logged in. " : ""}
          <button className="log-btn" onClick={toggleAuth}>{isAuthenticated ? "Log out" : "Log in"}</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

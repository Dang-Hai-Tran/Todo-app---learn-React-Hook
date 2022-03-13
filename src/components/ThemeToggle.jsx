import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button className="toggle-btn" onClick={toggleTheme}>
      Toggle theme
    </button>
  );
};

export default ThemeToggle;

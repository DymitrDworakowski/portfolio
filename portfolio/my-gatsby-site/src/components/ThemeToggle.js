import React from "react";
import useDarkMode from "use-dark-mode";

const ThemeToggle = () => {
  const darkMode = useDarkMode(false); // початкова тема - світла

  return (
    <button type="button" onClick={darkMode.toggle}>
      {darkMode.value ? "🌙" : "☀️"} {/* Змінюємо іконку залежно від теми */}
    </button>
  );
};

export default ThemeToggle;
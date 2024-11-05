// import React from "react";
// import useDarkMode from "use-dark-mode";
// import {sun} from '../../public/icons/sun.svg'
// import moon from "../../public/icons/moon.svg'

// const ThemeToggle = () => {
//   const darkMode = useDarkMode(false); // початкова тема - світла

//   return (
//     <button type="button" onClick={darkMode.toggle}>
//       {darkMode.value ? "🌙" : {sun}} {/* Змінюємо іконку залежно від теми */}
//     </button>
//   );
// };

// export default ThemeToggle;

// import React from "react";
// import useDarkMode from "use-dark-mode";
// import { ReactComponent as SunIcon } from "../icons/sun.svg";
// import { ReactComponent as MoonIcon } from "../icons/moon.svg";
// import "./ThemeToggle.css"; // Імпорт стилів кнопки

// const ThemeToggle = () => {
//   const darkMode = useDarkMode(false); // початкова тема - світла

//   return (
//     <button type="button" onClick={darkMode.toggle}>
//       {darkMode.value ? <MoonIcon /> : <SunIcon />}
//     </button>
//   );
// };

// export default ThemeToggle;

import React from "react";
import useDarkMode from "use-dark-mode";
import {button,svg} from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const darkMode = useDarkMode(false); // початкова тема - світла

  return (
    <button type="button" onClick={darkMode.toggle} className={button}>
      <img className={svg}
        src={darkMode.value ? "/icons/moon.svg" : "/icons/sun.svg"} // Шлях до іконок у папці public
        alt={darkMode.value ? "Dark Mode" : "Light Mode"}
        width="20" // Опціонально: розмір іконки
        height="20"
      />
    </button>
  );
};

export default ThemeToggle;
import React from "react"; 
import useDarkMode from "use-dark-mode";
import {button, svg} from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const storedDarkMode = localStorage.getItem('darkMode'); 
  const darkMode = useDarkMode(storedDarkMode === 'true' ? true : false); 

  React.useEffect(() => {
    // зберігаємо зміну теми в localStorage
    localStorage.setItem('darkMode', darkMode.value ? 'true' : 'false');
  }, [darkMode.value]);

  return (
    <button type="button" onClick={darkMode.toggle} className={button}>
      <img className={svg}
        src={darkMode.value ? "/icons/moon.svg" : "/icons/sun.svg"}
        alt={darkMode.value ? "Dark Mode" : "Light Mode"}
        width="20"
        height="20"
      />
    </button>
  );
};

export default ThemeToggle;

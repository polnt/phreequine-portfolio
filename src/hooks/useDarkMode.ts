import { useState, useEffect } from "react";
import { useMediaQuery } from './useMediaQuery';

const useDarkMode = () => {
  const isDarkDefault = useMediaQuery("(prefers-color-scheme: dark)");
  const isDarkDefaultLocal = sessionStorage.getItem("dm") === "dark" ? true : false; 
  const resolvedDefault = isDarkDefault || isDarkDefaultLocal;
  const [isDark, setIsDark] = useState(resolvedDefault);

  useEffect(() => {
    if(isDark) {
      document.body.classList.remove("light");
      sessionStorage.setItem("dm", "dark");
    } else {
      document.body.classList.add("light");
      sessionStorage.setItem("dm", "light");
    }
  }, [isDark])

  const changeDarkMode = () => {
    setIsDark(!isDark);
  };

  return { isDark, changeDarkMode };
};

export default useDarkMode;

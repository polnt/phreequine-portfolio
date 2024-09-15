import { useState, useEffect } from "react";
import { useMediaQuery } from './useMediaQuery';

const useDarkMode = () => {
  const isDarkDefault = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useState(isDarkDefault);

  useEffect(() => {
    if(isDark) {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
    }
  }, [isDark])

  const changeDarkMode = () => {
    setIsDark(!isDark);
  };

  return { isDark, changeDarkMode };
};

export default useDarkMode;

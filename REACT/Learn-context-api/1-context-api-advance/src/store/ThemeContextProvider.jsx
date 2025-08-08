import {createContext, useState } from "react";

const ThemeContextProvider = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const contextVal = { theme: theme, themeToggler: themeToggler };

  return (
    <ThemeContextProvider.Provider value={contextVal}>
      {children}
    </ThemeContextProvider.Provider>
  );
};

export default ThemeContextProvider;

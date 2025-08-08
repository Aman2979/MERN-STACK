import React, { useContext } from "react";
import ThemeContextProvider from "../store/ThemeContextProvider";

function ToggleButton() {
  const {theme, themeToggler} = useContext(ThemeContextProvider)
  return (
    <button className={`p-3 m-4 font-bold text-2xl border-2 rounded-2xl hover:w-80 ${theme === 'light' ? "bg-slate-300" : "bg-slate-800 text-white"}`} onClick={themeToggler}>
      Theme Change to {theme === "light" ? "dark" : "light"}
    </button>
  );
}

export default ToggleButton;

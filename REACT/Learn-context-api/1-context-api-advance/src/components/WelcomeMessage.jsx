import React, { useContext } from 'react'
import ThemeContextProvider from '../store/ThemeContextProvider'

function WelcomeMessage() {
  const {theme} = useContext(ThemeContextProvider)
  return (
    <h1 className={`p-3 m-4 font-bold text-4xl rounded-2xl  ${theme == 'light' ? "bg-slate-300" : "bg-slate-800 text-white"}`}>Welcome to Theme Changer</h1>
  )
}

export default WelcomeMessage

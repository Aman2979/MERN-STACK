import ToggleButton from "./components/ToggleButton"
import WelcomeMessage from "./components/WelcomeMessage"
import ThemeContextProvider, { ThemeProvider } from "./store/ThemeContextProvider";

function App() {
  return (
    <ThemeProvider>
    <WelcomeMessage />
    <ToggleButton />
    </ThemeProvider> 
  )
}

export default App

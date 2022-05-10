import { Theme } from "./Components/Theme";
import { ThemeContextProvider } from "./contexts/ThemeContext";

export function App() {
  return (
    <ThemeContextProvider>
      <Theme />
    </ThemeContextProvider>
  )
}

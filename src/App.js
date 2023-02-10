import Navigation from "./components/Navigation";
import Home from "./Pages/Home";
import './App.css'
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Navigation>
          <Home />
        </Navigation>
    </ThemeProvider>
  );
}

export default App;

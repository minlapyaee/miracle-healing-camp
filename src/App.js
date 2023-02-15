import { useState } from "react";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { routes, userRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserNavigation from "./components/UserNavigation";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      {isUserLoggedIn ? (
        <UserNavigation>
          <Routes>
            {userRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                exact={route.exact}
                element={<route.component {...route} />}
              />
            ))}
          </Routes>
        </UserNavigation>
      ) : (
        <Navigation>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                exact={route.exact}
                element={<route.component {...route} />}
              />
            ))}
          </Routes>
        </Navigation>
      )}
    </ThemeProvider>
  );
}

export default App;

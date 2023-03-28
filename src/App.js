import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { adminRoutes, routes, userRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserNavigation from "./components/UserNavigation";
import { UserContext } from "./context/userContext";
import api from "./config/api";
import NotFoundPage from "./NotFoundPage";
import AdminNavigation from "./components/AdminNavigation";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const fetchUserInfo = () => {
    api
      .get(
        "/user/get_user/",
        {},
        { rftoken_id: localStorage.getItem("rftoken_id") }
      )
      .then((result) => {
        setLoading(false);
        setUser(result);
      })
      .catch((err) => {
        console.log("err => ", err);
      });
  };

  useEffect(() => {
    if (user?.rftoken_id) {
      localStorage.setItem("rftoken_id", user?.rftoken_id);
    }
  }, [user]);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        {user?.accessToken ? (
          user?.user.role === "client" ? (
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
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </UserNavigation>
          ) : (
            <AdminNavigation>
              <Routes>
                {adminRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    exact={route.exact}
                    element={<route.component {...route} />}
                  />
                ))}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AdminNavigation>
          )
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
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Navigation>
        )}
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;

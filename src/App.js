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
import MaintenancePage from "./MaintenancePage";

function App() {
  const [loading, setLoading] = useState(true);
  const [showMaintenancePage, setShowMaintenancePage] = useState(false);
  const [user, setUser] = useState({});

  const fetchUserInfo = () => {
    api
      .get("/admin/fetch_maintenance_status", {})
      .then((res) => {
        api
          .get(
            "/user/get_user/",
            {},
            { rftoken_id: localStorage.getItem("rftoken_id") }
          )
          .then((result) => {
            setLoading(false);
            setUser(result);
            if (result?.user?.role === "client") {
              if (res.data.length === 0) {
                setShowMaintenancePage(false);
              } else {
                setShowMaintenancePage(res.data[0].status);
              }
            }
          })
          .catch((err) => {
            console.log("err => ", err);
          });
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    if (user?.rftoken_id) {
      api
        .get("/admin/fetch_maintenance_status", {})
        .then((res) => {
          if (res.data.length === 0) {
            setShowMaintenancePage(false);
          } else {
            setShowMaintenancePage(res.data[0].status);
          }
        })
        .catch((err) => console.log("err", err));
      localStorage.setItem("rftoken_id", user?.rftoken_id);
    }
  }, [user]);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {}, [showMaintenancePage]);

  if (loading) {
    return <div>Loading</div>;
  }
  console.log({ showMaintenancePage });
  return (
    <>
      {showMaintenancePage ? (
        <MaintenancePage />
      ) : (
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
      )}
    </>
  );
}

export default App;

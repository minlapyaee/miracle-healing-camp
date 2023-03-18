import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

function UserNavigation(props) {
  const location = useLocation();
  const { setUser } = useContext(UserContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(location.pathname);
  const navigate = useNavigate();

  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("rftoken_id");
    navigate("/");
    setUser({});
  };

  const navItems = [
    {
      name: "Home",
      icon: <HomeIcon />,
      url: "/",
    },
    {
      name: "Book",
      icon: <LibraryBooksIcon />,
      url: "/make-an-appointment",
    },
  ];

  const drawer = (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Box>
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            component="body1"
            align="center"
            fontWeight="bold"
            color="primary"
          >
            Camp
          </Typography>
        </Toolbar>
        <Divider />
        <List sx={{ paddingLeft: 2, paddingRight: 2 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.url}
              disablePadding
              sx={{
                display: "block",
                background:
                  selectedItem === item.url && "rgba(54, 182, 249, 0.2)",
                borderRadius: selectedItem === item.url && 99999,
              }}
              onClick={() => setSelectedItem(item.url)}
            >
              <Link
                key={item.name}
                disablePadding
                to={item.url}
                style={{
                  color: "#6C6C6C",
                  textDecoration: "none",
                  marginBottom: 2,
                  display: "block",
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <>{item.icon}</>
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Button
          sx={{
            width: "100%",
          }}
          onClick={handleLogout}
        >
          <LogoutIcon sx={{ marginRight: 1, color: "#6C6C6C" }} />
          <Typography sx={{ color: "#6C6C6C" }}>Logout</Typography>
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, zIndex: 1 }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            zIndex: 1,
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            zIndex: 1,
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {location.pathname === "/make-an-appointment" && (
        <Box
          sx={{
            backgroundColor: "primary.secondary",
            position: "absolute",
            width: "100%",
            height: "50%",
          }}
        ></Box>
      )}

      <Box
        component="main"
        sx={{ width: "100%", minHeight: "100vh", background: "#F7F7F7" }}
      >
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            maxWidth: location.pathname === "/make-an-appointment" ? 1200 : 850,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}

UserNavigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserNavigation;

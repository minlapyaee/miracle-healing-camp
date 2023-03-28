/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Link,
  Button,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material/";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import AuthModal from "./AuthModal";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Logo from "../assets/logo.jpg";

const navItems = [
  {
    name: "Users",
    url: "/",
  },
  {
    name: "Admins",
    url: "/admin-list",
  },
  {
    name: "Customers",
    url: "/customers",
  },
  {
    name: "Appointments",
    url: "/appointment-list",
  },
  {
    name: "Classes",
    url: "/classes",
  },
  {
    name: "User",
    url: "/profile",
  },
];

function AdminNavigation(props) {
  const { user, setUser } = useContext(UserContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openProfile = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);
  const handleCloseModal = () => setOpenModal(false);

  const handleClickProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("rftoken_id");
    navigate("/");
    setUser({});
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Camp
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) =>
          item.name === "User" ? (
            <ListItem key={item.name} disablePadding>
              <Avatar sx={{ marginRight: 2 }}>{user.user.fullname[0]}</Avatar>
            </ListItem>
          ) : (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <AuthModal openModal={openModal} handleCloseModal={handleCloseModal} />
      <AppBar
        position="absolute"
        component="nav"
        zIndex={99}
        color="primary"
        sx={{
          padding: { sm: 0 },
          paddingLeft: { xs: "24px" },
          paddingTop: { xs: "11px" },
          paddingBottom: { xs: "13px" },
          // boxShadow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              display: { sm: "none" },
              fontWeight: 900,
              fontSize: 26,
              color: "whiteColor",
              cursor: "pointer",
              "&:hover": {
                color: "secondary",
              },
            }}
          >
            Camp
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* Icon */}
            <DragHandleIcon />
          </IconButton>
        </Box>

        <Toolbar
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Link
              href="/"
              sx={{
                // flexGrow: 1,
                width: 50,
                height: 50,
                display: { xs: "none", sm: "block" },
                fontWeight: 900,
                fontSize: 26,
                color: "whiteColor",
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <img src={Logo} alt="logo" width="100%" height="100%" />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: { sm: "center" },
            }}
          >
            {navItems.map((item) =>
              item.name === "User" ? (
                <>
                  <Button
                    key={item.name}
                    id="basic-button"
                    aria-controls={openProfile ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openProfile ? "true" : undefined}
                    onClick={handleClickProfile}
                  >
                    <Avatar sx={{ width: 30, height: 30 }}>
                      {user.user.fullname[0]}
                    </Avatar>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openProfile}
                    onClose={handleCloseProfile}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => navigate("/profile")}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              ) : item.name === "Make An Appointment" ? (
                <Button
                  key={item.name}
                  size="small"
                  color="secondary"
                  variant="contained"
                  onClick={() => navigate(item.url)}
                >
                  Make An Appointment
                </Button>
              ) : (
                <Link
                  href={item.url}
                  variant="body2"
                  key={item.name}
                  sx={{
                    color:
                      location.pathname === item.url
                        ? "secondary.main"
                        : "whiteColor",
                    fontSize: 15,
                    textDecoration: "none",
                    marginRight: 4,
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  {item.name}
                </Link>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box sx={{ background: location === "make-an-appointment" && "#9F9F9F" }}>
        {props.children}
      </Box>
    </div>
  );
}

export default AdminNavigation;

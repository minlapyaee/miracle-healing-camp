/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
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
} from "@mui/material/";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import AuthModal from "./AuthModal";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
    {
    name: "About Us",
    url: "about-us",
  },
  {
    name: "Services",
    url: "services",
  },

  {
    name: "Get Started",
    url: "",
  },
];

function Navigation(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);
  const handleCloseModal = () => setOpenModal(false);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Camp
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) =>
          item.name === "Get Started" ? (
            <Button
              key={item}
              disablePadding
              onClick={() => setOpenModal(true)}
            >
              <Button variant="contained" color="secondary">
                Get Started
              </Button>
            </Button>
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
                color: "primary.main",
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
              href="#"
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontWeight: 900,
                fontSize: 26,
                color: "whiteColor",
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Camp
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) =>
              item.name === "Get Started" ? (
                <Button
                  key={item}
                  size="small"
                  color="secondary"
                  variant="contained"
                  onClick={() => setOpenModal(true)}
                >
                  Get Started
                </Button>
              ) : (
                <Link
                  href={item.url}
                  variant="body2"
                  key={item.name}
                  sx={{
                    color: "whiteColor",
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

      <Box>{props.children}</Box>
    </div>
  );
}

export default Navigation;

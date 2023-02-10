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
} from "@mui/material/";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const navItems = ["Home", "Blogs", "Services", "Contact Us"];

function Navigation(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Camp
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
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
          boxShadow: 1,
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
            {navItems.map((item) => (
              <Link
                href="#"
                variant="body2"
                key={item}
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
                {item}
              </Link>
            ))}
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

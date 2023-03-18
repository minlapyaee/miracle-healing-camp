import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{ height: '100vh' }}>
      <Typography variant="h1" component="div" fontWeight="bold">404 Not Found.</Typography>
      <Link to="/">Go Back Home</Link>
    </Box>
  );
};

export default NotFoundPage;

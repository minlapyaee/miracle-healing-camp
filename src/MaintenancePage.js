import React from "react";
import UnderMaintenanceGIF from "./assets/gif/maintenance.gif";
import { Box, Typography } from "@mui/material";

const MaintenancePage = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      height="100vh"
    >
      <Box sx={{ mt: -5 }}>
        <img src={UnderMaintenanceGIF} alt="Maintenance" />
        <Typography variant="h6" align="center">
          Website is under
        </Typography>
        <Typography variant="h4" align="center">
          Maintenance.
        </Typography>
      </Box>
    </Box>
  );
};

export default MaintenancePage;

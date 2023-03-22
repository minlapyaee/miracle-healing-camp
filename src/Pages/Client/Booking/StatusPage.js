import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ClockCalendar from "../../../assets/clock_calendar.png";

const StatusPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="70vh"
    >
           <Box width={300}>
          <img src={ClockCalendar} alt="meeting" width="100%" height="100%" />
        </Box>
      <Box
        sx={{ background: "#4B4D99", color: "#fff", height: 200, width: "50%" }}
        borderRadius={2}
        p={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
   
        <Typography variant="h4" align="center" fontWeight="bold">
          Your Appointment Status
        </Typography>
        <Typography
          variant="h6"
          align="center"
          fontWeight="bold"
          mt={3}
          sx={{ color: "#FFC926" }}
        >
          Pending
        </Typography>
      </Box>
    </Box>
  );
};

export default StatusPage;

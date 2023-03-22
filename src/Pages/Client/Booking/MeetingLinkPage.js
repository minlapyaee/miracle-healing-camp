import { Box, Typography } from "@mui/material";
import React from "react";
import OnlineMeeting from "../../../assets/blog/OnlineMeeting.png";

const MeetingLinkPage = ({ meeting }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="85vh"
    >
      <Box width={300}>
        <img src={OnlineMeeting} alt="meeting" width="100%" height="100%" />
      </Box>
      <Box
        sx={{ background: "#4B4D99", color: "#fff" }}
        borderRadius={2}
        p={3}
        textAlign="center"
      >
        <Typography variant="h3" align="center" fontWeight="bold">
          You're ready to join
        </Typography>

        <Box mt={3} display="flex" alignItems="center" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <div> Meeting ID:</div>
            <div style={{ marginLeft: 20 }}>{meeting.host_id}</div>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <div> Password:</div>
            <div style={{ marginLeft: 20 }}>{meeting.password}</div>
          </Box>
        </Box>
        <Typography fontWeight="bold" mt={2}>
          OR
        </Typography>

        <a
          href={meeting.join_url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff" }}
        >
          {meeting.join_url}
        </a>
      </Box>

      {/* </Typography> */}
    </Box>
  );
};

export default MeetingLinkPage;

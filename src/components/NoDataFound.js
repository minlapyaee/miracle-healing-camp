import { Box, Typography } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NoDataFound = ({ title }) => {
  return (
    <Box align="center" mt={5}>
      <SentimentVeryDissatisfiedIcon
        sx={{ color: "#C4C4C4", width: 80, height: 80 }}
      />
      <Typography algin="center" color="#C4C4C4" variant="h4" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
};

export default NoDataFound;

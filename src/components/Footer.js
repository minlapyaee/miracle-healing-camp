import { Box, Grid, Typography } from '@mui/material';
import React from 'react'

const aboutMHCItems = [
    {
      name: "About Us",
    },
    {
      name: "Contact Us",
    },
    {
      name: "Help/FAQs",
    },
    {
      name: "Become a Member",
    },
    {
      name: "Send Us Feedback",
    },
  ];
  
  const services = [
    {
      name: "Therapy",
    },
    {
      name: "Psychiatry",
    },
    {
      name: "Self care",
    },
    {
      name: "Community",
    },
    {
      name: "Free Quizzes",
    },
  ];

const Footer = () => {
  return (
    <Box
    sx={{ backgroundColor: "primary.main", padding: 10, paddingBottom: 1 }}
  >
    <Grid container>
      <Grid item xs={3}>
        <Typography
          fontWeight={600}
          variant="subtitle1"
          mb={3}
          color="secondary.main"
        >
          About Miracle Healing Camp
        </Typography>
        {aboutMHCItems.map((item) => (
          <Typography
            variant="subtitle2"
            mb={1.5}
            color="whiteColor"
            fontWeight={300}
          >
            {item.name}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={3}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          mb={3}
          color="secondary.main"
        >
          Services
        </Typography>
        {services.map((item) => (
          <Typography
            variant="subtitle2"
            mb={1.5}
            color="whiteColor"
            fontWeight={300}
          >
            {item.name}
          </Typography>
        ))}
      </Grid>
    </Grid>
    <Typography
      variant="body2"
      align="center"
      mt={8}
      color="whiteColor"
      fontWeight={700}
      gutterBottom
    >
      © 2023 MiracleHealingCamp, Inc. All Rights Reserved
    </Typography>
  </Box>
  )
}

export default Footer
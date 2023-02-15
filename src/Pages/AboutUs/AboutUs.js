import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PeopleImage from "../../assets/people.png";
import ProblemImage from "../../assets/mentalproblem.png";
import LightBulbImage from "../../assets/lightbulb.png";
import { ReactComponent as PuzzleIcon } from "../../assets/puzzle.svg";
import DealIcon from "../../assets/deal.svg"
import WorkingIcon from "../../assets/working.svg"
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#404181",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          color="whiteColor"
          fontWeight="bold"
        >
          Who we are
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: -30,
          alignItems: "center",
        }}
      >
        <Box sx={{ width: 1000 }}>
          <img src={PeopleImage} alt="Experts" width={1000} />
          <Typography variant="body2" mt={3} mb={6}>
            We are the miracle healers that can assist in recovering the health
            of your mental state. Top therapists, counselors, and mental health
            specialists are available in Myanmar. Dedicated to offering
            high-quality care, experienced therapists and psychiatrists created
            the mental health platform known as Miracle Healing Camp. Our team
            is strongly committed to closing the treatment gap for mental
            illness in Myanmar. The goal of helping people live better every day
            motivates us.
          </Typography>
        </Box>
      </Box>
      {/* Problem */}
      <Box mt={10} px={15}>
        <Box mt={3}>
          <Grid container>
            <Grid item md={6} sm={12} display="flex" justifyContent="center">
              <img
                src={ProblemImage}
                alt="Therapy & Psychiatry"
                width="80%"
                height="100%"
              />
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography variant="body1" fontWeight={700} mt={3} mb={3}>
                The Problem
              </Typography>
              <Typography variant="body2">
                We are the miracle healers that can assist in recovering the
                health of your mental state. Top therapists, counselors, and
                mental health specialists are available in Myanmar. <br />
                Dedicated to offering high-quality care, experienced therapists
                and psychiatrists created the mental health platform known as
                Miracle Healing Camp. Our team is strongly committed to closing
                the treatment gap for mental illness in Myanmar. <br />
                The goal of helping people live better every day motivates us.
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              md={6}
              sm={12}
              display="flex"
              justifyContent="center"
              sx={{ display: { sm: "flex", md: "none" } }}
            >
              <img
                src={LightBulbImage}
                alt="Therapy & Psychiatry"
                width="80%"
                height="100%"
              />
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              sx={{ marginBottom: { xs: 5, md: 0 } }}
            >
              <Typography variant="body1" fontWeight={700} mt={3} mb={3}>
                Our Solution
              </Typography>
              <Typography variant="body2">
                We are the miracle healers that can assist in recovering the
                health of your mental state. Top therapists, counselors, and
                mental health specialists are available in Myanmar. <br />
                Dedicated to offering high-quality care, experienced therapists
                and psychiatrists created the mental health platform known as
                Miracle Healing Camp. Our team is strongly committed to closing
                the treatment gap for mental illness in Myanmar. <br />
                The goal of helping people live better every day motivates us.
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              display="flex"
              justifyContent="center"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <img
                src={LightBulbImage}
                alt="Therapy & Psychiatry"
                width="80%"
                height="100%"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* End Problem */}
      {/* Get in touch */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          padding: 3,
          paddingTop: 6,
          paddingBottom: 6,
        }}
        mt={10}
      >
        <Typography
          variant="h4"
          color="whiteColor"
          fontWeight={700}
          align="center"
        >
          Why Mircale Camp?
        </Typography>
        <Typography variant="body2" mt={3} align="center" color="whiteColor">
          Our platform is built by psychiatrists, psychologists, and mental
          health experts with global experiences.
        </Typography>
        <Grid container columnSpacing={3} rowSpacing={3} mt={5} px={15}>
          <Grid item xs={12} md={6} lg={4}>
            <Box align="center" sx={{ padding: 5 }}>
              <PuzzleIcon height={100} />

              <Typography
                variant="body2"
                mt={3}
                color="whiteColor"
                align="center"
              >
                Need help finding the right mental health support?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box align="center" sx={{ padding: 5 }}>
              {/* <DealIcon height={100} /> */}
              <img src={DealIcon} alt="Deal Icon " height="100px"/>
              <Typography
                variant="body2"
                mt={3}
                color="whiteColor"
                align="center"
              >
                Want mental health support for your organization?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box align="center" sx={{ padding: 5 }}>
              {/* <WorkingIcon height={100} /> */}
              <img src={WorkingIcon} alt="Working Icon " height="100px"/>
              <Typography
                variant="body2"
                mt={3}
                color="whiteColor"
                align="center"
              >
                Want to be a part of Miracle Healer?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Warning */}
      <Box sx={{ backgroundColor: "secondary.main", padding: 3 }}>
        <Typography variant="body2" align="center">If you didn't find what you were looking for, please reach out to us at support@miraclehealingcamp.com or +95142344321. We're here for you - for anything you might need.</Typography>
      </Box>

      {/* EndWarning */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;

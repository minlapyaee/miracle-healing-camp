import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { ReactComponent as HeadIcon } from "../assets/head.svg";
import { ReactComponent as QuizzIcon } from "../assets/quizz.svg";
import { ReactComponent as CommunicateIcon } from "../assets/communicate.svg";
import { ReactComponent as CalendarIcon } from "../assets/calendar.svg";
import TherapyImage from "../assets/therapy.png";
import CommunityImage from "../assets/community.png";
import "./Home.css";

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

const Home = () => {
  return (
    <div className="landing_page_container">
      <div className="landing_page">
        <div className="landing_page_text_container">
          <Typography variant="h1" fontWeight={700}>
            <Typography variant="span" color="primary.main">
              Mental
            </Typography>{" "}
            <Typography variant="span" color="secondary.main">
              Health
            </Typography>
          </Typography>
          <Typography textTransform="uppercase">
            A delightful experience for you.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ borderRadius: 9999, marginTop: 20 }}
          >
            Get Started
          </Button>
        </div>
      </div>
      {/* Who we are */}
      <Box textAlign="center" mt={6} mb={6}>
        <Typography variant="h4" fontWeight={700}>
          Who we are
        </Typography>
        <Typography variant="body2" mt={3}>
          We are the miracle healers who can help to cure your mental health in
          healthy condition.
          <br /> We have top Therapists, Counsellors, Mental Health Experts in
          Myanmar.
        </Typography>
      </Box>
      {/* End Who we are */}
      {/* Why mircale camp */}
      <Box sx={{ backgroundColor: "primary.main", padding: 3 }} mt={10}>
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
          <Grid item xs={12} md={6} lg={3}>
            <Paper align="center" sx={{ padding: 5 }}>
              <HeadIcon height={100} />
              <Typography variant="body2" fontWeight={700} mt={3} mb={3}>
                Integrate Mental Healthcare
              </Typography>
              <Typography variant="body2">
                From self-care, in-person or online therapy to psychiatry &
                medication management, we can help with it all.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper align="center" sx={{ padding: 5 }}>
              <QuizzIcon height={100} />
              <Typography variant="body2" fontWeight={700} mt={3} mb={3}>
                Free Mental Health Quizzes
              </Typography>
              <Typography variant="body2">
                From self-care, in-person or online therapy to psychiatry &
                medication management, we can help with it all.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper align="center" sx={{ padding: 5 }}>
              <CommunicateIcon height={100} />
              <Typography variant="body2" fontWeight={700} mt={3} mb={3}>
                Integrate Mental Healthcare
              </Typography>
              <Typography variant="body2">
                From self-care, in-person or online therapy to psychiatry &
                medication management, we can help with it all.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper align="center" sx={{ padding: 5 }}>
              <CalendarIcon height={100} />
              <Typography variant="body2" fontWeight={700} mt={3} mb={3}>
                Integrate Mental Healthcare
              </Typography>
              <Typography variant="body2">
                From self-care, in-person or online therapy to psychiatry &
                medication management, we can help with it all..
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* End Why Mircale Camp */}
      {/* Online Counselling and Therapy Consultation */}
      <Box mt={10} px={15}>
        <Typography variant="h4" fontWeight={700} align="center">
          Online Counselling and Therapy Consultation
        </Typography>
        <Typography variant="body2" mt={3} align="center">
          We provides online therapy and Counseling consultation in Myanmar and
          around the globe.
          <br /> Consult Online Psychologists, therapist, counsellors, mental
          health experts via chat, phone or video call.
        </Typography>
        <Box mt={3}>
          <Grid container>
            <Grid item md={6} sm={12} display="flex" justifyContent="center">
              <img
                src={TherapyImage}
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
                Integrate Mental Healthcare
              </Typography>
              <Typography variant="body2">
                Our professionals are highly qualified and trained to deliver
                quality and compassionate clinical treatment. <br /> <br /> They
                follow proprietary protocols & undergo peer supervision to
                ensure you get exceptional care, now in person too. Meet your
                mental health expert today.
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
                src={CommunityImage}
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
                Community
              </Typography>
              <Typography variant="body2">
                Our community is a safe space to share your struggles & get peer
                support. <br /> <br />
                Connect with people from across the globe. Remain anonymous (if
                you prefer) and get ongoing emotional support in a space
                moderated by mental health experts.
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
                src={CommunityImage}
                alt="Therapy & Psychiatry"
                width="80%"
                height="100%"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Footer */}
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
          display="block"
          align="center"
          mt={8}
          color="whiteColor"
          fontWeight={700}
          gutterBottom
        >
          © 2023 MiracleHealingCamp, Inc. All Rights Reserved
        </Typography>
      </Box>
    </div>
  );
};

export default Home;

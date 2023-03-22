import React, { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { ReactComponent as HeadIcon } from "../../assets/head.svg";
import { ReactComponent as QuizzIcon } from "../../assets/quizz.svg";
import { ReactComponent as CommunicateIcon } from "../../assets/communicate.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import TherapyImage from "../../assets/therapy.png";
import CommunityImage from "../../assets/community.png";
import MeditatingImage from "../../assets/meditating.png";
import ConsultationImage from "../../assets/consultation.png";
import AssessmentImage from "../../assets/assessment.png";
import AnxietyTestImage from "../../assets/anxietytest.png";
import PtsdTestImage from "../../assets/ptsdtest.png";
import CheckMarkImage from "../../assets/checkmark.png";
import FamilyImage from "../../assets/family.png";
import AuthModal from "../../components/AuthModal";
import "./LandingPage.css";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => setOpenModal(false);
  return (
    <div className="landing_page_container">
      <AuthModal openModal={openModal} handleCloseModal={handleCloseModal} />
      <div className="landing_page">
        <div className="landing_page_text_container">
          <Typography variant="h1" fontWeight={700} color="white" mb={2}>
            Free, online, personalized mental health care with Miracle Healing
            Camp
          </Typography>
          <Typography
            textTransform="uppercase"
            fontWeight="bold"
            variant="body2"
          >
            We are here to help you every time, everywhere you need.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ borderRadius: 9999, marginTop: 20 }}
            onClick={() => setOpenModal(true)}
          >
            Sign up for free
          </Button>
        </div>
        <div>
          <img src={MeditatingImage} alt="Meditating" />
        </div>
      </div>
      {/* Who we are */}
      <Box
        textAlign="center"
        mt={10}
        mb={10}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box display="flex" justifyContent="center">
          <img src={ConsultationImage} alt="Consultation" width="400px" />
        </Box>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Who we are
          </Typography>
          <Typography variant="body2" mt={3}>
            We are the miracle healers who can help to cure your mental health
            in healthy condition.
            <br /> We have top Therapists, Counsellors, Mental Health Experts in
            Myanmar.
          </Typography>
        </Box>
      </Box>
      {/* End Who we are */}
      {/* Why mircale camp */}
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
      {/* Self Assessment */}
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
          What you are struggling with? Take Free Quizzes to know!
        </Typography>
        <Grid container columnSpacing={3} rowSpacing={3} mt={5} px={15}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper align="center" sx={{ minHeight: 250, paddingBottom: 2 }}>
              <Box
                sx={{
                  background: `url(${AssessmentImage})`,
                  width: "100%",
                  height: "200px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
              {/* <img src={AssessmentImage} alt="assesment" /> */}
              <Typography variant="body2" fontWeight={700} mt={1} mb={3}>
                Depression Test (Self-Assessment)
              </Typography>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => navigate("/qa")}
              >
                Take a Test
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper align="center" sx={{ minHeight: 250, paddingBottom: 2 }}>
              <Box
                sx={{
                  background: `url(${AnxietyTestImage})`,
                  width: "100%",
                  height: "200px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
              {/* <img src={AssessmentImage} alt="assesment" /> */}
              <Typography variant="body2" fontWeight={700} mt={1} mb={3}>
                Depression Test (Self-Assessment)
              </Typography>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => navigate("/qa2")}
              >
                Take a Test
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper align="center" sx={{ minHeight: 250, paddingBottom: 2 }}>
              <Box
                sx={{
                  background: `url(${PtsdTestImage})`,
                  width: "100%",
                  height: "200px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
              {/* <img src={AssessmentImage} alt="assesment" /> */}
              <Typography variant="body2" fontWeight={700} mt={1} mb={3}>
                Depression Test (Self-Assessment)
              </Typography>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => navigate("/qa3")}
              >
                Take a Test
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Self Assessment */}
      {/* Services for packages */}
      <Box
        sx={{
          backgroundColor: "white",
          padding: 3,
          paddingBottom: 6,
        }}
      >
        <Typography
          variant="h4"
          color="darkColor"
          fontWeight={700}
          align="center"
        >
          Services for packages
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            align="center"
            sx={{
              padding: 5,
              background: "#4B4D99",
              width: 250,
              borderRadius: 8,
            }}
            mt={5}
          >
            <Typography variant="h6" fontWeight={700} mb={3} color="white">
              Basic Package
            </Typography>
            <Typography variant="overline" color="white">
              This package include:
            </Typography>

            <ul
              style={{
                color: "#fff",
                marginTop: 30,
              }}
            >
              <li
                style={{
                  background: `url(${CheckMarkImage}) no-repeat left center`,
                  padding: "5px 10px 5px 25px",
                  listStyle: "none",
                  margin: "10px 0px",
                  verticalAlign: "middle",
                }}
              >
                1 counselling
              </li>
              <li
                style={{
                  background: `url(${CheckMarkImage}) no-repeat left center`,
                  padding: "5px 10px 5px 25px",
                  listStyle: "none",
                  margin: "10px 0px",
                  verticalAlign: "middle",
                }}
              >
                Free assesment
              </li>
              <li
                style={{
                  background: `url(${CheckMarkImage}) no-repeat left center`,
                  padding: "5px 10px 5px 25px",
                  listStyle: "none",
                  margin: "10px 0px",
                  verticalAlign: "middle",
                }}
              >
                Join community
              </li>
            </ul>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ borderRadius: 9999, marginTop: 20 }}
              onClick={() => setOpenModal(true)}
            >
              50,000 mmk
            </Button>
          </Box>
        </Box>
      </Box>
      {/* End Services for packages */}
      <Box
        sx={{
          backgroundColor: "white",
          paddingBottom: 6,
        }}
        px={15}
      >
        <Grid container alignItems="center">
          <Grid item md={6} sm={12}>
            <Typography variant="h5" fontWeight="bold">
              Need help for someone you care about?
            </Typography>
            <Typography variant="body2" mt={3}>
              We know how hard it is to watch someone you care about struggling.
              Finding the right care is the first step. If you want guidance on
              the best mental health support for yourself or a loved one a
              Miracle Healing Camp can help you.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} display="flex" justifyContent="center">
            <img src={FamilyImage} alt="family" height={400} />
          </Grid>
        </Grid>
      </Box>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;

import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Step,
  StepButton,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import DoctorImage from "../../../assets/doctor.png";
import MeditatingImage from "../../../assets/meditating.png";
import AssessmentImage from "../../../assets/assessment.png";
import CheckMarkImage from "../../../assets/checkmark.png";
import FamilyImage from "../../../assets/family.png";
import AuthModal from "../../../components/AuthModal";
import "./LandingPage.css";
import Footer from "../../../components/Footer";
import { UserContext } from "../../../context/userContext";

const data = [
  {
    title: "Choose Date",
  },
  {
    title: "Get Confirmation",
  },
  {
    title: "Join Zoom Meeting Link",
  },
  {
    title: "Done!",
  },
];

const Home = () => {
  const { user } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [currentSteps, setCurrentSteps] = useState(0);

  const handleCloseModal = () => setOpenModal(false);
  return (
    <div className="landing_page_container">
      <AuthModal openModal={openModal} handleCloseModal={handleCloseModal} />
      <div className="landing_page">
        <div className="landing_page_text_container">
          <Typography variant="h1" fontWeight={700} color="white" mb={2}>
            Welcome, {user.user.fullname}
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
      {/* Your Health is our Priority */}
      <Box>
        <Typography
          variant="h4"
          color="darkColor"
          fontWeight={700}
          align="center"
        >
          Booking Appointment Steps
        </Typography>
        <Box width={1100} margin="auto" mt={6} mb={10}>
          <Stepper alternativeLabel activeStep={-1} disabled={false}>
            {data.map((label, index) => (
              <Step key={label} className="stepper">
                <StepButton onClick={() => setCurrentSteps(index)}>
                  <Typography variant="div">{label.title}</Typography>
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
      {/* End Your Health is our Priority */}
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
            <Paper align="center" sx={{ height: 250, paddingBottom: 2 }}>
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
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper align="center" sx={{ height: 250, paddingBottom: 2 }}>
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
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper align="center" sx={{ height: 250, paddingBottom: 2 }}>
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
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Self Assessment */}

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

export default Home;

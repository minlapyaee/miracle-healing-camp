import React, { useContext, useState, useEffect } from "react";
import Footer from "../../../components/Footer";
import Reminderinthecalendar from "../../../assets/Booking/Reminderinthecalendar.png";
import ProcessGIF from "../../../assets/gif/process.gif";
import PaymentGIF from "../../../assets/gif/payment.gif";
import "./Booking.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import api from "../../../config/api";
import { UserContext } from "../../../context/userContext";
import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";
import StatusPage from "./StatusPage";
import MeetingLinkPage from "./MeetingLinkPage";
import CircularCustomLoader from "../../../components/CircularCustomLoader";
import { Link } from "react-router-dom";

const Booking = () => {
  const { user } = useContext(UserContext);
  const [showStatusPage, setShowStatusPage] = useState(false);
  const [fetchDataLoader, setFetchDataLoader] = useState(true);
  const [showMeetingLinkPage, setShowMeetingLinkPage] = useState(false);
  const [meeting, setMeeting] = useState({});
  const [selectNowDateOption, setSelectNowDateOption] = useState("schedule");
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    gender: "male",
    phone_number: "",
    email: "",
    appointment_before: "yes",
    feel_streeed: "never",
    past_two_weeks: "not really",
    having_hard_time_to_sleep: "never",
    appointment_time: new Date(),
    appointment_date: new Date(),
    feedback: "",
  });
  const [showCalendarPage, setShowCalendarPage] = useState(false);

  const showSecondPage = (e) => {
    e.preventDefault();
    setShowCalendarPage(true);
  };

  const onChangeHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    api
      .get("/client/check_customer_package", null, {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((result) => {
        setFetchDataLoader(false);

        // expired
        if (result.data === null) {
          return setIsExpired(true);
        }

        if (result.data.status === "verified") {
          setFetchDataLoader(true);
          api
            .get("/client/check_appointment", null, {
              accessToken: user.accessToken,
              rftoken_id: localStorage.getItem("rftoken_id"),
            })
            .then((res) => {
              setFetchDataLoader(false);
              setIsVerified(true);
              if (res.message === "success") {
                if (res?.data?.status === "pending") {
                  setShowStatusPage(true);
                }
                if (res?.data?.status === "progress") {
                  setShowMeetingLinkPage(true);
                  setMeeting(res.meeting);
                }
              }
            })
            .catch((err) => {
              console.log("err", err);
            });
        }
      });
  }, []);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    api
      .post("/client/create_appointment", JSON.stringify(formData), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {
        setShowStatusPage(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  if (fetchDataLoader) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularCustomLoader />
      </Box>
    );
  }

  if (isExpired) {
    return (
      <Box mt={15}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ height: "60vh" }}
        >
          <img src={PaymentGIF} alt="payment" />
          <Typography component="div" fontWeight="bold">
            Please purchase a package. &nbsp;
            <Link to="/purchase_package">Purchase here</Link>
          </Typography>
        </Box>
      </Box>
    );
  }

  if (!isVerified) {
    return (
      <Box mt={15}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ height: "60vh" }}
        >
          <img src={ProcessGIF} alt="process" />
          <Typography component="div" fontWeight="bold">
            Your payment method is under processing. Please wait.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <div className="divBooking">
      {showMeetingLinkPage ? (
        <MeetingLinkPage meeting={meeting} />
      ) : showStatusPage ? (
        <StatusPage />
      ) : (
        <>
          <div className="divBooking1 ">
            <span>
              <img src={Reminderinthecalendar} />
            </span>
            <span>
              <h1>We focus on your mental health</h1>
              <p>Let's make an appointment</p>
            </span>
          </div>
          <div className="divBooking2">
            <h1>Book an Appointment</h1>
            <p>
              Before choosing the time that you are available, please fill out
              your information and we will get back soon to you for more updates
              and plan your appointment.
            </p>
          </div>
          {!showCalendarPage ? (
            <div className="divBooking3">
              <form onSubmit={showSecondPage}>
                <h1>Appointment Request Form</h1>
                <fieldset className="fstForm1">
                  <legend>Name</legend>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={onChangeHandle}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={onChangeHandle}
                    required
                  />
                </fieldset>
                <fieldset className="fstForm1">
                  <legend>Date of Birth</legend>
                  <input
                    type="number"
                    placeholder="Day"
                    name="dob_day"
                    value={formData.dob_day}
                    onChange={onChangeHandle}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Month"
                    name="dob_month"
                    value={formData.dob_month}
                    onChange={onChangeHandle}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Year"
                    name="dob_year"
                    value={formData.year}
                    onChange={onChangeHandle}
                    required
                  />
                </fieldset>
                <fieldset className="fstForm1">
                  <legend>Gender</legend>
                  <select
                    name="gender"
                    onChange={onChangeHandle}
                    value={formData.gender}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer not to disclose">
                      Prefer not to disclose
                    </option>
                  </select>
                </fieldset>
                <fieldset className="fstForm1">
                  <legend>Phone Number</legend>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={onChangeHandle}
                    required
                  ></input>
                </fieldset>
                <fieldset className="fstForm1">
                  <legend>Email</legend>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={onChangeHandle}
                    required
                  ></input>
                </fieldset>
                <fieldset className="fstForm2">
                  <legend>Have you ever made appointment before?</legend>
                  <input
                    type="radio"
                    name="appointment_before"
                    id="rdo1Q1"
                    value="yes"
                    checked={formData.appointment_before === "yes"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo1Q1">Yes</label>
                  <input
                    type="radio"
                    name="appointment_before"
                    id="rdo2Q1"
                    value="no"
                    checked={formData.appointment_before === "no"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo2Q1">No</label>
                </fieldset>
                <fieldset className="fstForm2">
                  <legend>How often do you feel stressed?</legend>
                  <input
                    type="radio"
                    name="feel_streeed"
                    id="rdo1Q2"
                    value="never"
                    checked={formData.feel_streeed === "never"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo1Q2">Never</label>
                  <input
                    type="radio"
                    name="feel_streeed"
                    id="rdo2Q2"
                    value="rarely"
                    checked={formData.feel_streeed === "rarely"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo2Q2">Rarely</label>
                  <input
                    type="radio"
                    name="feel_streeed"
                    id="rdo3Q2"
                    value="often"
                    checked={formData.feel_streeed === "often"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo3Q2">Often</label>
                  <input
                    type="radio"
                    name="feel_streeed"
                    id="rdo4Q2"
                    value="always"
                    checked={formData.feel_streeed === "always"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo4Q2">Always</label>
                </fieldset>
                <fieldset className="fstForm2">
                  <legend>
                    Have you felt anxious or on edge in the past two weeks?
                  </legend>
                  <input
                    type="radio"
                    name="past_two_weeks"
                    id="rdo1Q3"
                    value="not really"
                    checked={formData.past_two_weeks === "not really"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo1Q3">Not really</label>
                  <input
                    type="radio"
                    name="past_two_weeks"
                    id="rdo2Q3"
                    value="once or twice"
                    checked={formData.past_two_weeks === "once or twice"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo2Q3">Once or Twice</label>
                  <input
                    type="radio"
                    name="past_two_weeks"
                    id="rdo3Q3"
                    value="yes, often"
                    checked={formData.past_two_weeks === "yes, often"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo3Q3">Yes, Often</label>
                  <input
                    type="radio"
                    name="past_two_weeks"
                    id="rdo4Q3"
                    checked={formData.past_two_weeks === "always"}
                    value="always"
                    onChange={onChangeHandle}
                  />
                  <label for="rdo4Q3">Always</label>
                </fieldset>
                <fieldset className="fstForm2">
                  <legend>Do you have hard time to sleep?</legend>
                  <input
                    type="radio"
                    name="having_hard_time_to_sleep"
                    checked={formData.having_hard_time_to_sleep === "never"}
                    id="rdo1Q4"
                    value="never"
                    onChange={onChangeHandle}
                  />
                  <label for="rdo1Q4">Never</label>
                  <input
                    type="radio"
                    name="having_hard_time_to_sleep"
                    checked={formData.having_hard_time_to_sleep === "rarely"}
                    id="rdo2Q4"
                    value="rarely"
                    onChange={onChangeHandle}
                  />
                  <label for="rdo2Q4">Rarely</label>
                  <input
                    type="radio"
                    name="having_hard_time_to_sleep"
                    id="rdo3Q4"
                    value="often"
                    checked={formData.having_hard_time_to_sleep === "often"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo3Q4">Often</label>
                  <input
                    type="radio"
                    name="having_hard_time_to_sleep"
                    id="rdo4Q4"
                    value="always"
                    checked={formData.having_hard_time_to_sleep === "always"}
                    onChange={onChangeHandle}
                  />
                  <label for="rdo4Q4">Always</label>
                </fieldset>
                <button type="submit" style={{ cursor: "pointer" }}>
                  Next
                </button>
              </form>
            </div>
          ) : (
            <div className="divBooking4">
              <form onSubmit={handleSubmit}>
                <h1>Preferred Appointment Date </h1>
                <fieldset className="fstForm1">
                  <legend>Which Date and time work best for you?</legend>
                </fieldset>
                <div
                  className="fstForm2"
                  style={{ marginBottom: selectNowDateOption === "now" && 10 }}
                >
                  <input
                    type="radio"
                    id="now_time"
                    value="now"
                    checked={selectNowDateOption === "now"}
                    onChange={(e) => setSelectNowDateOption("now")}
                  />
                  <label for="now_time" style={{ marginRight: 8 }}>
                    Now
                  </label>
                  <input
                    type="radio"
                    id="schedule_time"
                    value="schedule"
                    checked={selectNowDateOption === "schedule"}
                    onChange={(e) => setSelectNowDateOption("schedule")}
                  />
                  <label for="schedule_time">Schedule</label>
                </div>
                {selectNowDateOption !== "now" && (
                  <fieldset className="fstForm1">
                    <DatePicker
                      placeholderText="Time"
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={60}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      name="appointment_time"
                      selected={formData.appointment_time}
                      onChange={(value) =>
                        setFormData({
                          ...formData,
                          appointment_time: value,
                        })
                      }
                    />
                    <DatePicker
                      placeholderText="Day"
                      dateFormat="dd/MM/yyyy"
                      name="appointment_date"
                      selected={formData.appointment_date}
                      onChange={(value) =>
                        setFormData({
                          ...formData,
                          appointment_date: value,
                        })
                      }
                    />
                  </fieldset>
                )}

                <fieldset className="fstForm1">
                  <legend>What do you expect us from the appointment?</legend>
                  <textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={onChangeHandle}
                  ></textarea>
                </fieldset>
                {loading ? (
                  <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress size={24} />
                  </Box>
                ) : (
                  <button>Submit</button>
                )}
              </form>
            </div>
          )}
        </>
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default Booking;

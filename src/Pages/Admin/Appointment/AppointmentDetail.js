import {
  TextField,
  FormControl,
  Typography,
  Autocomplete,
  Button,
  Grid,
  CircularProgress,
  formControlClasses,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../config/api";
import { UserContext } from "../../../context/userContext";

const inputs = [
  {
    name: "First Name",
    field: "first_name",
  },
  {
    name: "Last Name",
    field: "last_name",
  },
  {
    name: "Day",
    field: "dob_day",
  },
  {
    name: "Month",
    field: "dob_month",
  },
  {
    name: "Year",
    field: "dob_year",
  },
  {
    name: "Gender",
    field: "gender",
  },
  {
    name: "Phone Number",
    field: "phone_number",
  },
  {
    name: "Email",
    field: "email",
  },
  {
    name: "Have you ever made appointment before?",
    field: "appointment_before",
  },
  {
    name: "How often do you feel stressed?",
    field: "feel_streeed",
  },
  {
    name: "Have you felt anxious or on edge in the past two weeks?",
    field: "past_two_weeks",
  },
  {
    name: "Do you have hard time to sleep?",
    field: "having_hard_time_to_sleep",
  },
  {
    name: "Appointment Time",
    field: "appointment_time",
  },
  {
    name: "Appointment Date",
    field: "appointment_date",
  },
  {
    name: "What do you expect us from the appointment?",
    field: "feedback",
  },
];

const AppointmentDetail = () => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState("pending");
  const [meetingLink, setMeetingLink] = useState({});
  const [showErrorField, setShowErrorField] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const params = useParams();

  useEffect(() => {
    api
      .get(
        "/admin/appointment_detail",
        { appointment_id: params.id },
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        if (res.message === "success") {
          setData(res.data);
          setMeetingLink(res.meeting);
          setStatus(
            res.data.status.charAt(0).toUpperCase() + res.data.status.slice(1)
          );
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const handleSubmit = () => {
    setLoading(true);
    setShowErrorField(false);
    const formData = {
      status: status.toLowerCase(),
      appointment_id: data._id,
      id: params.id,
    };
    let arr = ["pending", "progress", "completed"];
    if (!status) {
      setLoading(false);
      return setShowErrorField(true);
    }
    api
      .post("/admin/update_appointment", JSON.stringify(formData), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {
        setLoading(false);
        if (res.message === "success") {
          setMeetingLink(res.meeting);
          // setShowSuccessBox(true);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Box mt={12}>
      {/* <Typography mb={3}> AppointmentDetail</Typography> */}

      <Box
        sx={{
          width: 600,
          margin: "auto",
        }}
      >
        {meetingLink && (
          <Box align="center" mb={3}>
            <a href={meetingLink.join_url}>{meetingLink.join_url}</a>
            <Typography>
              {meetingLink.host_id} - {meetingLink.password}
            </Typography>
          </Box>
        )}

        <Grid container spacing={2}>
          <Grid item xs>
            <Autocomplete
              options={
                data.status === "pending"
                  ? ["Pending", "Progress", "Completed"]
                  : data.status === "progress"
                  ? ["Completed"]
                  : []
              }
              size="small"
              sx={{ marginBottom: 4 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={showErrorField}
                  helperText={showErrorField && "Required Field."}
                  // InputProps={{readOnly: true}}
                />
              )}
              value={status}
              onChange={(e, value) => setStatus(value)}
            />
          </Grid>
          <Grid item xs>
            {loading ? (
              <CircularProgress size={24} sx={{ marginTop: 1 }} />
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                Update Status
              </Button>
            )}
          </Grid>
        </Grid>

        {inputs.map((input) => {
          return (
            <FormControl fullWidth sx={{ marginBottom: 3 }}>
              <Typography>{input.name}</Typography>
              <TextField
                data-testid="form-field-url"
                size="small"
                sx={{
                  ".MuiInputBase-input": { fontSize: 14 },
                }}
                value={data[input.field]}
                disabled
                // helperText={otpError}
              />
            </FormControl>
          );
        })}
      </Box>
    </Box>
  );
};

export default AppointmentDetail;

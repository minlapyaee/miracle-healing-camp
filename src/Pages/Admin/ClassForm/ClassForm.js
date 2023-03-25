import React, { useContext, useState, useEffect } from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import api from "../../../config/api";
import { UserContext } from "../../../context/userContext";
import { useNavigate, useParams } from "react-router-dom";

const ClassForm = () => {
  const [formData, setFormData] = useState({
    class_name: "",
    google_form_link: "",
    duration: ""
  });
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [showSuccessBox, setShowSuccessBox] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (id) {
      api
        .get(
          "/admin/detail_class",
          { class_id: id },
          {
            accessToken: user.accessToken,
            rftoken_id: localStorage.getItem("rftoken_id"),
          }
        )
        .then((res) => {
          console.log("res-------", res);
          if(res.success) {
            setFormData({
                class_name: res.data.class_name,
                google_form_link: res.data.google_form_link,
                duration: res.data.duration,
            })
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);

  const handleSubmit = () => {
    let cloneFormData = {...formData}
    if(id) {
        cloneFormData['class_id'] = id
    }
    api
      .post("/admin/create-class", JSON.stringify(cloneFormData), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {
        console.log("res", res);
        navigate("/classes");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Box mt={13}>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "whiteColor",
            minHeight: 420,
            boxShadow: 10,
            p: 4,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography align="center" mb={3}>
              Class's information
            </Typography>
            {/* {showSuccessBox && ( */}
            {/* <Box
              sx={{
                border: "1px solid #00A100",
                fontSize: "13px",
                background: "#EEFFEE",
                padding: "8px",
                color: "#00A100",
                borderRadius: "8px",
                marginBottom: 2,
                textAlign: "center",
              }}
            >
              Successfully Updated.{" "}
            </Box> */}
            {/* )} */}
            <FormControl fullWidth sx={{ marginTop: 4 }}>
              <Typography variant="subtitle2" mb={0.5}>
                Class Name
              </Typography>
              <TextField
                name="class_name"
                data-testid="form-field-url"
                size="small"
                sx={{
                  ".MuiInputBase-input": { fontSize: 14 },
                }}
                value={formData.class_name}
                onChange={handleChange}
                //   onChange={(e) => setOtpCode(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: 4 }}>
              <Typography variant="subtitle2" mb={0.5}>
                Duration
              </Typography>
              <TextField
                name="duration"
                data-testid="form-field-url"
                size="small"
                sx={{
                  ".MuiInputBase-input": { fontSize: 14 },
                }}
                value={formData.duration}
                onChange={handleChange}
                //   onChange={(e) => setOtpCode(e.target.value)}
              />
            </FormControl>
              
            <FormControl fullWidth sx={{ marginTop: 4 }}>
              <Typography variant="subtitle2" mb={0.5}>
                Google Form Link
              </Typography>
              <TextField
                name="google_form_link"
                data-testid="form-field-url"
                size="small"
                sx={{
                  ".MuiInputBase-input": { fontSize: 14 },
                }}
                value={formData.google_form_link}
                onChange={handleChange}
                //   onChange={(e) => setOtpCode(e.target.value)}
              />
            </FormControl>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: 99999,
              width: "100%",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              fontWeight: 700,
              textTransform: "none",
              fontSize: 16,
              marginTop: 4,
            }}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ClassForm;

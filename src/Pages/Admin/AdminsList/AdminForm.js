import React, { useContext, useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";
import api from "../../../config/api";
import { UserContext } from "../../../context/userContext";
import { useNavigate, useParams } from "react-router-dom";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
  });
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [showSuccessBox, setShowSuccessBox] = useState(false);
  const [showFailBox, setShowFailBox] = useState(false);

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
          if (res.success) {
            setFormData({
              class_name: res.data.class_name,
              google_form_link: res.data.google_form_link,
              duration: res.data.duration,
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);

  const handleSubmit = () => {
    setShowSuccessBox(false);
    setShowFailBox(false);
    let cloneFormData = { ...formData };
    // if(id) {
    //     cloneFormData['class_id'] = id
    // }
    api
      .post("/admin/create-admin", JSON.stringify(cloneFormData), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {
        if (res.message === "success") {
          setShowSuccessBox(true);
        }
        if (res.message === "failed") {
          setShowFailBox(true);
        }
        // navigate("/classes");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Box mt={13}>
      <Snackbar
        open={showFailBox}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={"error"}
          onClose={() => {
            setShowFailBox(false);
          }}
        >
          User already existed.
        </Alert>
      </Snackbar>
      <Snackbar
        open={showSuccessBox}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={"success"}
          onClose={() => {
            setShowSuccessBox(false);
          }}
        >
          Successfully created an account.
        </Alert>
      </Snackbar>
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
              Admin
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
                Full Name
              </Typography>
              <TextField
                name="fullname"
                data-testid="form-field-url"
                size="small"
                sx={{
                  ".MuiInputBase-input": { fontSize: 14 },
                }}
                value={formData.fullname}
                onChange={handleChange}
                //   onChange={(e) => setOtpCode(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: 4 }}>
              <Typography variant="subtitle2" mb={0.5}>
                Email
              </Typography>
              <TextField
                name="email"
                data-testid="form-field-url"
                size="small"
                type="email"
                required
                sx={{
                  ".MuiInputBase-input": { fontSize: 14 },
                }}
                value={formData.email}
                onChange={handleChange}
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

export default AdminForm;

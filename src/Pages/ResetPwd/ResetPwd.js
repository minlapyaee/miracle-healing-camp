import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../config/api";

const ResetPwd = () => {
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const params = useParams();


  const handleResetPwd = () => {
    setShowError("");
    if (password === "") {
      return setShowError("Required Field");
    } else if (password.length < 7) {
      return setShowError("Password must be at least 6 characters.");
    } else {
      api
        .post(
          "/user/update_password",
          JSON.stringify({password}),
          {
            accessToken: params.id,
          }
        )
        .then((res) => {
          if (res.message === "success") {
            setShowError("");
            setShowSuccess(true);
          }else {
            setShowError("Somethign went wrong.");
          }
        })
        .catch((err) => {
          setShowError("Something went wrong");
          console.log("errr", err);
        });
    }
  };

  return (
    <Box mt={15}>
      <Box maxWidth={700} margin="auto">
        {showError && (
          <Box
            sx={{
              border: "1px solid #E72D35",
              fontSize: "13px",
              background: "#FFF0F0",
              padding: "8px",
              color: "#E72D35",
              borderRadius: "8px",
              marginBottom: 2,
              textAlign: "center",
            }}
          >
            {showError}
          </Box>
        )}
        {showSuccess && (
          <Box
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
          </Box>
        )}

        <FormControl fullWidth sx={{ marginBottom: 3 }}>
          <Typography>New Password</Typography>
          <TextField
            data-testid="form-field-url"
            size="small"
            sx={{
              ".MuiInputBase-input": { fontSize: 14 },
            }}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={handleResetPwd}
          sx={{ marginTop: 5 }}
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
};

export default ResetPwd;

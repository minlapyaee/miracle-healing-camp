import {
  Avatar,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import api from "../../config/api";
import { UserContext } from "../../context/userContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [fullname, setFullname] = useState(user.user.fullname);
  const [showError, setShowError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    setShowSuccess(false);
    setShowError(null);
    if (user.user.fullname === fullname) {
      return setShowError("You haven't updated anything yet.");
    }
    if (fullname === "") {
      return setShowError("Required Field.");
    } else {
      api
        .post("/user/update_profile", JSON.stringify({ fullname }), {
          rftoken_id: localStorage.getItem("rftoken_id"),
        })
        .then((res) => {
          if (res.message === "ok") {
            setShowError("");
            setUser(res);
            setShowSuccess(true);
          }
          console.log("res", res);
        })
        .catch((err) => {
          setShowError("Something went wrong");
          console.log("errr", err);
        });
    }
  };

  const handleResetPwd = () => {
    api
      .post(
        "/user/reset_password_link",
        JSON.stringify({ email: user.user.email }),
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  return (
    <Box mt={15}>
      <Box
        maxWidth={700}
        margin="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Avatar
          sx={{
            width: 70,
            height: 70,
            fontSize: 25,
            marginBottom: 3,
            textTransform: "uppercase",
          }}
        >
          {user.user.fullname[0]}
        </Avatar>
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
          <Typography>Email</Typography>
          <TextField
            data-testid="form-field-url"
            size="small"
            sx={{
              ".MuiInputBase-input": { fontSize: 14 },
            }}
            value={user.user.email}
            disabled
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 3 }}>
          <Typography>Fullname</Typography>
          <TextField
            data-testid="form-field-url"
            size="small"
            sx={{
              ".MuiInputBase-input": { fontSize: 14 },
            }}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </FormControl>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={handleSubmit}
        >
          Update
        </Button>
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

export default Profile;

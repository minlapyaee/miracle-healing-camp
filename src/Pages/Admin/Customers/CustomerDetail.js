import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import api from "../../../config/api";
import { UserContext } from "../../../context/userContext";

const CustomerDetail = () => {
  const [image, setImage] = useState(null);
  const [prevStatus, setPrevStatus] = useState("");
  const { user } = useContext(UserContext);
  const [status, setStatus] = useState("pending");
  const [statusOptions, setStatusOptions] = useState(["pending", "verified", "expired"]);
  const [showSuccessBox, setShowSuccessBox] = useState(false);
  const [id, setId] = useState(null);
  const params = useParams();

  useEffect(() => {
    api
      .get(
        "/admin/customer_detail",
        { customer_id: params.id },
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        if (res.message === "success") {
          // if (res.data.status === "pending") {
          //   setStatusOptions(["pending", "verified"]);
          // }
          // if (res.data.status === "verified") {
          //   setStatusOptions(["verified", "expired"]);
          // }
          setStatus(res.data.status);
          setPrevStatus(res.data.status);
          setId(res.data._id);
          setImage(res.data.image);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const handleSubmit = () => {
    const reason = `${user.user.fullname} updated from ${prevStatus} to ${status}.`;
    setShowSuccessBox(false);
    const data = {
      status,
      id,
    };
    if (status !== prevStatus) {
      data["reason"] = reason;
    }
    setPrevStatus(status)
    api
      .post("/admin/update_customer", JSON.stringify(data), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {
        if (res.message === "success") {
          setShowSuccessBox(true);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 300,
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
            User's information
          </Typography>
          {showSuccessBox && (
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

          <Typography variant="subtitle2" mb={0.5}>
            Screenshot*
          </Typography>
          <Box height={200} mb={3}>
            <img src={image} alt="screenshot" width="100%" height="100%" />
          </Box>

          <FormControl fullWidth mt={4}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Age"
              onChange={(e) => setStatus(e.target.value)}
              size="small"
            >
              {statusOptions &&
                statusOptions.map((option) => (
                  <MenuItem value={option} sx={{ textTransform: "capitalize" }}>
                    {option.charAt(0).toUpperCase()}
                    {option.slice(1)}
                  </MenuItem>
                ))}
            </Select>
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
  );
};

export default CustomerDetail;

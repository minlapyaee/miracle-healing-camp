import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import api from "../../../config/api";
import { UserContext } from "../../../context/userContext";
import { Link } from "react-router-dom";

const PackageForm = () => {
  const { user } = useContext(UserContext);
  const [file, setFile] = useState(null);
  const [showErrorBox, setShowErrorBox] = useState(false);
  const [showSuccessBox, setShowSuccessBox] = useState(false);

  const convertImageToBase64 = (file) =>
    new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      const reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });

  const submitHandle = async () => {
    setShowErrorBox(false);
    setShowSuccessBox(false);
    const base64File = await convertImageToBase64(file);

    const data = {
      image: base64File,
    };
    api
      .post("/client/register_customer", JSON.stringify(data), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {
        if (res.message === "existed") {
          setShowErrorBox(true);
        }
        if (res.message === "success") {
          setShowSuccessBox(true);
        }
      })
      .catch((err) => {
        console.log("errr", err);
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
          height: 400,
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
            Fill your information
          </Typography>
          {showErrorBox && (
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
              You already purchased a package.
            </Box>
          )}
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
              You successfully purchased a package.{" "}
              <Link
                to="/make-an-appointment"
                style={{
                  color: "#00A100",
                }}
              >
                Apoointment Now!
              </Link>
            </Box>
          )}

          <Typography variant="subtitle2" mb={0.5}>
            Screenshot*
          </Typography>
          <TextField
            name="password"
            data-testid="form-field-url"
            size="small"
            sx={{
              ".MuiInputBase-input": { fontSize: 14 },
            }}
            fullWidth
            helperText="Please transfer via KPay ( 09123456789 )"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
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
          onClick={submitHandle}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default PackageForm;

import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import GirlWithSkinImage from "../../assets/girls_with_skin.png";
import api from "../../config/api";
import { UserContext } from "../../context/userContext";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    api
      .get(
        "/admin/classes",
        {},
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        if (res.message === "success") {
          setClasses(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <Box sx={{ width: 800, margin: "auto", marginTop: 15 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Join our professional classes
      </Typography>
      {classes.length === 0 ? (
        <div>No Classes right now</div>
      ) : classes.map(item => (
        <Paper sx={{ padding: 2, marginBottom: 2 }} elevation={3}>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Box>
            <Typography>{item.class_name}</Typography>
            <Typography>{item.duration}</Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: 8, marginTop: 3 }}
              onClick={() => window.open(item.google_form_link, '_blank').focus()}
            >
              Enroll Now
            </Button>
          </Box>
          <Box width={200} height={200} >
            <img
              src={GirlWithSkinImage}
              alt="Thumbnail"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Paper>
      ))
  
      }
    </Box>
  );
};

export default Classes;

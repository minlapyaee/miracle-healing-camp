import { Box, Button, Switch, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import api from "../../../config/api";
import { UserContext } from "../../../context/userContext";

const AdminMaintenance = () => {
  const { user } = useContext(UserContext);
  const [isMaintenance, setIsMaintenance] = useState(false);

  const handleSubmit = () => {
    api
      .post(
        "/admin/update_maintenance_status",
        JSON.stringify({ status: isMaintenance }),
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    api
      .get(
        "/admin/fetch_maintenance_status",
        {},
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        if (res.data.length === 0) {
          setIsMaintenance(false);
        } else {
        setIsMaintenance(res.data[0].status)
        }
      })
      .catch((err) => console.log("err", err));
  }, []);

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
            minHeight: 200,
            boxShadow: 10,
            p: 4,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography align="center" mb={3}>
            Maintenance Client Page
          </Typography>
          <Box>
            <Typography>Status</Typography>
            <Switch
              checked={isMaintenance}
              onChange={(e) => setIsMaintenance(e.target.checked)}
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
            onClick={handleSubmit}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminMaintenance;

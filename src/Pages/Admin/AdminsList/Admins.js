import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import api from "../../../config/api";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import moment from "moment";
import CircularCustomLoader from "../../../components/CircularCustomLoader";
import SummarizeIcon from "@mui/icons-material/Summarize";

const Admins = () => {
  const [adminList, setAdminList] = useState([]);
  const [audit, setAudit] = useState({});
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleOpen = (user_id) => {
    setOpen(true);
    api
      .get(
        "/admin/user-audit",
        { user_id },
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        if (res.message === "success") {
          setAudit(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    api
      .get(
        "/admin/admin-list",
        {},
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        setLoader(false);
        if (res.message === "success") {
          setAdminList(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: "rgba(147, 148, 148, 1)",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  if (loader) {
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
  return (
    <Box sx={{ zIndex: 3, position: "relative" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "3px solid #4B4D99",
            boxShadow: 24,
            borderRadius: 3,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            color="primary.main"
            component="h2"
            align="center"
          >
            Audit
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Created by {audit?.created_by?.fullname}.
            <Typography variant="span" sx={{ fontSize: 13, color: "#7e7c7c" }}>
              &nbsp; -{" "}
              {moment(audit?.createdAt).format("DD MMMM YYYY, h:mm a")}
            </Typography>
          </Typography>
        </Box>
      </Modal>
      <Box mt={8}>
        <Box sx={{ backgroundColor: "white", borderRadius: 1 }} mt={3} p={3}>
          <Box display="flex" justifyContent="space-between" aligns="center">
            <Typography variant="h4" mb={3} fontWeight="bold">
              Admin List
            </Typography>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="small"
              sx={{
                width: " 170px",
                textTransform: "capitalize",
                height: "38px",
              }}
              // onClick={handleSubmit}
              onClick={() => navigate("/create-admin")}
            >
              Create New Admin
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Joined at</StyledTableCell>
                  <StyledTableCell align="right">Audit</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminList &&
                  adminList.map((user) => (
                    <StyledTableRow key={user._id}>
                      <StyledTableCell component="th" scope="row">
                        {user.email}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {user.fullname}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {moment(user.created_at).format("MMM DD, YYYY")}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <SummarizeIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => handleOpen(user._id)}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Admins;

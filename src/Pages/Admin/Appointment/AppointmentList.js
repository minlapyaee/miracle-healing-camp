import React, { useState, useEffect, useContext } from "react";
import {
  Box,
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

const AppointmentLists = () => {
  const [appointmentList, setAppointmentList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [auditLoader, setAuditLoader] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [audit, setAudit] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    api
      .get(
        "/admin/appointment_list",
        {},
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        setLoader(false);
        if (res.message === "success") {
          setAppointmentList(res.data);
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

  const handleOpen = (appointment_id) => {
    setAuditLoader(true);
    setOpen(true);
    api
      .get(
        "/admin/appointment-audit",
        { appointment_id },
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        setAuditLoader(false);
        if (res.message === "success") {
          setAudit(res.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleClose = () => setOpen(false);

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
            maxHeight: 400,
            overflowY: "scroll",
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
            sx={{ marginBottom: 3 }}
          >
            Audit
          </Typography>
          {auditLoader && (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularCustomLoader size={20} />
            </Box>
          )}

          {audit.length === 0 && (
            <Typography
              variant="body2"
              display="block"
              sx={{ fontSize: 13, color: "#7e7c7c" }}
              align="center"
            >
              No Audit Found.
            </Typography>
          )}
          {audit &&
            audit.map((aud) => (
              <Box
                sx={{
                  border: "1px solid #7e7c7c",
                  borderRadius: 2,
                  padding: 2,
                  marginBottom: 2,
                }}
              >
                <Typography
                  variant="body2"
                  id="modal-modal-description"
                  sx={{ fontsize: 15 }}
                >
                  {aud.reason}
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ fontSize: 13, color: "#7e7c7c" }}
                  >
                    {moment(aud?.createdAt).format("DD MMMM YYYY, h:mm a")}
                  </Typography>
                </Typography>
              </Box>
            ))}
        </Box>
      </Modal>
      <Box mt={8}>
        <Box sx={{ backgroundColor: "white", borderRadius: 1 }} mt={3} p={3}>
          <Typography variant="h4" mb={3} fontWeight="bold">
            Appointment List
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointmentList &&
                  appointmentList.map((item) => (
                    <StyledTableRow key={item._id}>
                      <StyledTableCell component="th" scope="row">
                        {item.requested_by.fullname}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {moment(item.createdAt).format("MMM DD, YYYY")}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{
                          color:
                            item.status === "verified"
                              ? "rgba(124, 210, 39, 1)"
                              : "rgb(214 146 0)",
                          fontWeight: "600",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.status}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Box
                          display="flex"
                          justifyContent="flex-end"
                          alignItems="center"
                        >
                          <EditIcon
                            sx={{
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              navigate(`/appointment-detail/${item._id}`)
                            }
                          />
                          <SummarizeIcon
                            sx={{ cursor: "pointer", marginLeft: 3 }}
                            onClick={() => handleOpen(item._id)}
                          />
                          {/* <Box ml={2} sx={{ cursor: "pointer" }}>Audit</Box> */}
                        </Box>
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

export default AppointmentLists;

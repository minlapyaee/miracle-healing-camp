import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Book = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

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

  const rows = [
    {
      name: "Name",
      date: "26 Feb",
      time: "1:00",
      status: "Completed",
    },
    {
      name: ":D",
      date: "28 Feb",
      time: "3:00",
      status: "Pending",
    },
  ];

  const BookModal = () => {
    return (
      <Dialog
        open={openModal}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "600px!important",
            height: "300px",
            overflowY: "auto",
            borderRadius: 3,
          },
        }}
      >
        <DialogTitle>
          <Typography align="center">Book an Appointment</Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle2" mb={0.5}>
            Select a Day
          </Typography>
          <DatePicker
            // selected={startDate}
            // onChange={(date) => setStartDate(date)}
            className="datepicker-appointment"
          />
          <Typography variant="subtitle2" mb={0.5}>
            Select a Time
          </Typography>
          <DatePicker
            // selected={startDate}
            // onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="datepicker-appointment"
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ marginRight: 3 }}>
            {" "}
            <Typography
              sx={{ fontSize: 14, textTransform: "initial" }}
              variant="caption"
              onClick={handleClose}
            >
              Cancel
            </Typography>
          </Button>
          {/* createPostLoader */}
          {/* {createPostLoader ? (
          <Box display="flex">
            <CircularProgress size={24} />
          </Box>
        ) : ( */}
          <Button
            size="medium"
            variant="contained"
            sx={{ borderRadius: 999 }}
            onClick={() => null}
          >
            <Typography
              sx={{ fontSize: 14, textTransform: "initial" }}
              variant="caption"
            >
              Make
            </Typography>
          </Button>
          {/* )} */}
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box sx={{ zIndex: 3, position: "relative" }}>
      {BookModal()}
      <Typography variant="h5" fontWeight="bold" color="white">
        Make an Appointment
      </Typography>
      <Box mt={4}>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            size="large"
            sx={{ width: 150 }}
            onClick={() => setOpenModal(true)}
          >
            Book
          </Button>
        </Box>
        <Box sx={{ backgroundColor: "white", borderRadius: 1 }} mt={3} p={3}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{
                        color:
                          row.status === "Completed"
                            ? "rgba(124, 210, 39, 1)"
                            : "rgba(243, 179, 41, 1)",
                        fontWeight: "600",
                      }}
                    >
                      {row.status}
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

export default Book;

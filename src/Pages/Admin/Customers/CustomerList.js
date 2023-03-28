import React, { useState, useEffect, useContext } from "react";
import {
  Box,
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

const CustomerLists = () => {
  const [customerList, setCustomerList] = useState([]);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    api
      .get(
        "/admin/customer_list",
        {},
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        setLoader(false)
        if (res.message === "success") {
          setCustomerList(res.data);
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
      <Box mt={8}>
        <Box sx={{ backgroundColor: "white", borderRadius: 1 }} mt={3} p={3}>
          <Typography variant="h4" mb={3} fontWeight="bold">
            Customer List
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
                {customerList.map((customer) => (
                  <StyledTableRow key={customer._id}>
                    <StyledTableCell component="th" scope="row">
                      {customer.created_by.fullname}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {moment(customer.createdAt).format("MMM DD, YYYY")}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{
                        color:
                          customer.status === "verified"
                            ? "rgba(124, 210, 39, 1)"
                            : "rgb(214 146 0)",
                        fontWeight: "600",
                        textTransform: "capitalize",
                      }}
                    >
                      {customer.status}
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
                            navigate(`/customer-detail/${customer._id}`)
                          }
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

export default CustomerLists;

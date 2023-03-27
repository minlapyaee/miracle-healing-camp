import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
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
import DeleteIcon from '@mui/icons-material/Delete';
import api from "../../../config/api";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import moment from "moment";

const ClassList = () => {
  const [classList, setClassList] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const fetchClass = () => {
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
        setClassList(res.data);
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
  }

  useEffect(() => {
    fetchClass()
  }, []);


  const handleDelete = (id) => {
    api
    .post("/admin/remove-class", JSON.stringify({class_id: id}), {
      accessToken: user.accessToken,
      rftoken_id: localStorage.getItem("rftoken_id"),
    })
    .then((res) => {
      fetchClass()
    })
    .catch((err) => {
      console.log("err", err);
    });
  }

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

  return (
    <Box sx={{ zIndex: 3, position: "relative" }}>
      <Box mt={8}>
        <Box sx={{ backgroundColor: "white", borderRadius: 1 }} mt={3} p={3}>
          <Box display="flex" justifyContent="space-between" aligns="center">
            <Typography variant="h4" mb={3} fontWeight="bold">
              Classes
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
              onClick={() => navigate("/create-class")}
            >
              Create a Class
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Class Name</StyledTableCell>
                  <StyledTableCell align="right">
                    Published Date
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {
                  classList && classList.map(class => {
                    return 
                  })
                } */}
               {
                classList && classList.map(item => {
                  return (
                    <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {item.class_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{moment(item.createdAt).format("MMM DD, YYYY")}</StyledTableCell>
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
                            navigate(`/create-class/${item._id}`)
                          }
                        />
                        <DeleteIcon 
                        sx={{
                          cursor: "pointer",
                          marginLeft: 2,
                          color: "red"
                        }}
                        onClick={() => handleDelete(item._id)}
                        />
                        {/* <Box ml={2} sx={{ cursor: "pointer" }}>Audit</Box> */}
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                  )
                })
               }
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ClassList;

import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RichTextEditor from "react-rte";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

let dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.. It has survived not only five centuries, but also the leap.`;

const Home = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState("question");
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenModal(false);
    setType("question");
  };

  const [editorState, setEditorState] = useState(
    RichTextEditor.createEmptyValue()
  );

  const onChangeEditorState = (val) => {
    console.log("we", val);
    setEditorState(val);
  };

  const createContentModal = () => {
    return (
      <Dialog
        open={openModal}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "600px!important",
            height: "500px",
            overflowY: "auto",
          },
        }}
      >
        <DialogTitle>
          {" "}
          <Grid container>
            <Grid
              item
              xs={6}
              align="center"
              sx={{
                color: "#6C6C6C",
                display: "flex",
                justifyContent: "center",
                padding: 1,
                "&:hover": { backgroundColor: "#F4F4F4" },
                backgroundColor:
                  type === "question" && "rgba(54, 182, 249, 0.2)",
                fontSize: 14,
              }}
              onClick={() => setType("question")}
            >
              <HelpCenterIcon fontSize="small" sx={{ marginRight: 1 }} />
              Ask
            </Grid>
            <Grid
              item
              xs={6}
              align="center"
              sx={{
                color: "#6C6C6C",
                display: "flex",
                justifyContent: "center",
                padding: 1,
                "&:hover": { backgroundColor: "#F4F4F4" },
                backgroundColor: type === "story" && "rgba(54, 182, 249, 0.2)",
                fontSize: 14,
              }}
              onClick={() => setType("story")}
            >
              <AutoStoriesIcon fontSize="small" sx={{ marginRight: 1 }} />
              Story
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          {type === "question" ? (
            <TextField
              placeholder="What are you thoughts?"
              fullWidth
              multiline
              sx={{
                border: "none",
                "& fieldset": { border: "none" },
                ".MuiInputBase-input": {
                  fontSize: 13,
                },
              }}
            />
          ) : (
            <RichTextEditor
              value={editorState}
              onChange={onChangeEditorState}
              style={{ height: 600 }}
              id="answer-text-editor"
            />
          )}
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
          <Button size="medium" variant="contained" sx={{ borderRadius: 999 }}>
            <Typography
              sx={{ fontSize: 14, textTransform: "initial" }}
              variant="caption"
            >
              Respond
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box>
      {createContentModal()}
      <Paper
        sx={{
          minHeight: 130,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 2,
        }}
      >
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Avatar sx={{ marginRight: 2 }}>N</Avatar>
          <Box
            sx={{
              backgroundColor: "#F4F4F4",
              borderRadius: 99999,
              flex: 1,
              padding: 1,
              paddingLeft: 3,
            }}
            onClick={() => setOpenModal(true)}
          >
            <Typography sx={{ color: "#9F9F9F", fontSize: 14 }}>
              What do you want to ask or share?
            </Typography>
          </Box>
        </Box>
        <Grid container>
          <Grid
            item
            xs={6}
            align="center"
            sx={{
              color: "#6C6C6C",
              display: "flex",
              justifyContent: "center",
              padding: 1,
              "&:hover": { backgroundColor: "#F4F4F4" },
              fontSize: 14,
            }}
            onClick={() => {
              setType("question");
              setOpenModal(true);
            }}
          >
            <HelpCenterIcon fontSize="small" sx={{ marginRight: 1 }} />
            Ask
          </Grid>
          <Grid
            item
            xs={6}
            align="center"
            sx={{
              color: "#6C6C6C",
              display: "flex",
              justifyContent: "center",
              padding: 1,
              "&:hover": { backgroundColor: "#F4F4F4" },
              fontSize: 14,
            }}
            onClick={() => {
              setType("story");
              setOpenModal(true);
            }}
          >
            <AutoStoriesIcon fontSize="small" sx={{ marginRight: 1 }} />
            Story
          </Grid>
        </Grid>
      </Paper>

      {/* Posts */}
      <Box sx={{ marginTop: 6 }}>
        <Card sx={{ padding: 2 }}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ marginRight: 2 }}>D</Avatar>
            <Box>
              <Typography variant="subtitle1" component="div">
                Denny
              </Typography>
              <Typography
                variant="caption"
                component="div"
                sx={{ marginTop: -1, color: "#9F9F9F" }}
              >
                {" "}
                a few minutes ago{" "}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              What are the most common life mistakes young people make?
            </Typography>
            <Typography variant="body2" color="#6C6C6C">
              {dummyText.slice(0, 300)}
              {dummyText.length > 300 && (
                <Typography
                  variant="subtitle2"
                  color="primary"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => navigate("/detail-post/1")}
                >
                  Read More
                </Typography>
              )}
            </Typography>
            <Chip label="Story" sx={{ marginTop: 2 }} />
          </Box>
          <Box mt={2}>
            <Button
              sx={{ marginRight: 2, borderRadius: 99999 }}
              onClick={() => navigate("/detail-post/1")}
            >
              <ThumbUpAltIcon sx={{ color: "#636466", marginRight: 1 }} />0
            </Button>
            <Button
              sx={{ borderRadius: 99999 }}
              onClick={() => navigate("/detail-post/1")}
            >
              <ChatBubbleIcon sx={{ color: "#636466", marginRight: 1 }} />0
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;

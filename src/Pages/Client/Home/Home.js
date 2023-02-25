import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RichTextEditor from "react-rte";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { makeStyles } from "@mui/styles";
import api from "../../../config/api";
import { UserContext } from "../../../context/userContext";
import { motion } from "framer-motion";
import RenderPost from "../../../components/RenderPost";

const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: [
    "INLINE_STYLE_BUTTONS",
    "BLOCK_TYPE_BUTTONS",
    "LINK_BUTTONS",
    "BLOCK_TYPE_DROPDOWN",
    "HISTORY_BUTTONS",
  ],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "custom-css-class" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: "Normal", style: "unstyled" },
    { label: "Heading Small", style: "header-three" },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
  ],
};

const useStyles = makeStyles((theme) => ({
  helperText: {
    textAlign: "right",
  },
}));

const Home = (props) => {
  const { user } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(null);
  const [postList, setPostList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [createPostLoader, setCreatePostLoader] = useState(false);

  const [type, setType] = useState("question");
  const [questionVal, setQuestionVal] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const [editorState, setEditorState] = useState(
    RichTextEditor.createEmptyValue()
  );

  const handleClose = () => {
    setOpenModal(false);
    setType("question");
    setTitle("");
    setContent(null);
    setQuestionVal("");
    setEditorState(RichTextEditor.createEmptyValue());
  };

  const onChangeEditorState = (val) => {
    let str = val.toString("html");
    setContent(str);
    setEditorState(val);
  };

  const fetchPosts = (showLoader = true) => {
    setLoader(showLoader);
    api
      .get(
        "/client/fetch_post",
        {},
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        setLoader(false);
        if (res.success) {
          setPostList(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = () => {
    setCreatePostLoader(true);
    let data = {};
    if (type === "question") {
      data = {
        title: questionVal,
        type: "Question",
      };
    } else {
      data = {
        title,
        content: content,
        type: "Story",
      };
    }

    api
      .post("/client/create_post", JSON.stringify(data), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {
        setCreatePostLoader(false);
        fetchPosts(false);
        handleClose();
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  const createLike = (post_id, post_owner_id) => {
    // const clonePostList = [...postList];

    // clonePostList.map((post) => {
    //   const findIndex = post.likes.findIndex(
    //     (like) => like.created_by === user.user._id
    //   );
    //   if (findIndex === -1) {
    //     return post.likes.push({
    //       created_by: user.user._id,
    //     });
    //   } else {
    //     return post.likes.splice(post.likes.indexOf(findIndex), 1);
    //   }
    // });

    // setPostList(clonePostList);

    api
      .post("/client/create_like", JSON.stringify({ post_id, post_owner_id }), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {
        fetchPosts(false);
      })
      .catch((err) => {
        console.log("errr", err);
      });
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
              onClick={() => {
                setType("question");
                setTitle("");
                setContent(null);
                setQuestionVal("");
                setEditorState(RichTextEditor.createEmptyValue());
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
                backgroundColor: type === "story" && "rgba(54, 182, 249, 0.2)",
                fontSize: 14,
              }}
              onClick={() => {
                setType("story");
                setTitle("");
                setContent(null);
                setQuestionVal("");
                setEditorState(RichTextEditor.createEmptyValue());
              }}
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
              onChange={(e) => setQuestionVal(e.target.value)}
              value={questionVal}
            />
          ) : (
            <>
              <TextField
                placeholder="title"
                size="small"
                fullWidth
                sx={{ marginBottom: 2 }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                inputProps={{
                  maxLength: 100,
                }}
                helperText={`${title.length} / 100 `}
                onChange={(e) => setTitle(e.target.value)}
              />
              <RichTextEditor
                value={editorState}
                onChange={onChangeEditorState}
                style={{ height: 600 }}
                id="answer-text-editor"
                toolbarConfig={toolbarConfig}
              />
            </>
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
          {/* createPostLoader */}
          {createPostLoader ? (
            <Box display="flex">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <Button
              size="medium"
              variant="contained"
              sx={{ borderRadius: 999 }}
              onClick={handleSubmit}
            >
              <Typography
                sx={{ fontSize: 14, textTransform: "initial" }}
                variant="caption"
              >
                Respond
              </Typography>
            </Button>
          )}
        </DialogActions>
      </Dialog>
    );
  };

  if (loader) {
    return (
      <div>
        <Skeleton variant="rectangular" fullWidth height={130} />;
        <Skeleton variant="rectangular" fullWidth mt={2} height={300} />;
        <Skeleton variant="rectangular" fullWidth mt={2} height={300} />;
      </div>
    );
  }
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
              setTitle("");
              setContent(null);
              setQuestionVal("");
              setEditorState(RichTextEditor.createEmptyValue());
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
              setTitle("");
              setContent(null);
              setQuestionVal("");
              setEditorState(RichTextEditor.createEmptyValue());
            }}
          >
            <AutoStoriesIcon fontSize="small" sx={{ marginRight: 1 }} />
            Story
          </Grid>
        </Grid>
      </Paper>

      {/* Posts */}
      {postList.map((data) => {
        const post = data.post;
        return (
          <motion.div
            key={post._id}
            layout
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/detail-post/${post.title}`)}
          >
            <RenderPost post={post} data={data} createLike={createLike} />
          </motion.div>
        );
      })}
    </Box>
  );
};

export default Home;

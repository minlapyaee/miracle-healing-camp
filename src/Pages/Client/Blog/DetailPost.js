import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import api from "../../../config/api";
import { UserContext } from "../../../context/userContext";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const DetailPost = () => {
  const { user } = useContext(UserContext);
  const [post, setPost] = useState(null);
  const [commentList, setCommentList] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentVal, setCommentVal] = useState("");
  const [loader, setLoader] = useState(true);
  const [commentLoader, setCommentLoader] = useState(true);
  const [createCmtLoader, setCreateCommentLoader] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const fetchPosts = (showLoader = true) => {
    setLoader(showLoader);
    api
      .get(
        `/client/fetch_post_detail`,
        { id: params.id },
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        setLoader(false);
        if (res.success) {
          const isFound = res.data.likes.find(
            (lik) => lik.created_by === user.user._id
          );
          if (isFound) {
            setIsLike(true);
          }
          setPost(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const fetchComments = (showCmtLoader = true) => {
    setCommentLoader(showCmtLoader);
    api
      .get(
        `/client/fetch_comment`,
        { post_id: post.post._id },
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        setCommentLoader(false);
        if (res.success) {
          setCommentList(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // window.history.pushState(
    //   "",
    //   "",
    //   window.location.origin + "/" + params.id.replace(" ", "-").toLowerCase()
    // );
    // navigate("../detail-post/" + params.id.replaceAll(" ", "-"), {
    //   replace: true,
    // });
    fetchPosts();
  }, [params.id]);

  const handleCommentSubmit = () => {
    setCreateCommentLoader(true);
    let data = {
      post_id: post.post._id,
      content: commentVal,
      post_owner_id: post.post.created_by._id,
    };
    api
      .post("/client/create_comment", JSON.stringify(data), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {
        setCreateCommentLoader(false);
        setCommentVal("");
        fetchComments(false);
      })
      .catch((err) => {
        console.log("submiterr", err);
      });
  };

  const handleLike = (post_id, post_owner_id) => {
    const clonePostList = post;

    const findIndex = clonePostList.likes.findIndex(
      (like) => like.created_by === user.user._id
    );
    if (findIndex === -1) {
      clonePostList.likes.push({
        created_by: user.user._id,
      });
      setIsLike(true);
    } else {
      clonePostList.likes.splice(clonePostList.likes.indexOf(findIndex), 1);
      setIsLike(false);
    }

    setPost(clonePostList);

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

  const CommentView = () => {
    return (
      <div>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            zIndex: 99,
          }}
          onClick={() => setShowCommentBox(false)}
        ></Box>
        <Box
          sx={{
            width: "30%",
            height: "100%",
            position: "fixed",
            top: 0,
            right: 0,
            background: "#fff",
            zIndex: 9999,
            padding: 3,
          }}
        >
          {commentLoader ? (
            <div>
              <Skeleton
                variant="rectangular"
                fullWidth
                sx={{ marginTop: 2 }}
                height={100}
              />
              <Skeleton
                variant="rectangular"
                fullWidth
                sx={{ marginTop: 2 }}
                height={100}
              />
              <Skeleton
                variant="rectangular"
                fullWidth
                sx={{ marginTop: 2 }}
                height={100}
              />
              <Skeleton
                variant="rectangular"
                fullWidth
                sx={{ marginTop: 2 }}
                height={100}
              />
            </div>
          ) : (
            <Box>
              {/* Form */}
              {user.accessToken && (
                <Paper sx={{ padding: 2 }}>
                  <Box display="flex" alignItems="center">
                    <Avatar sx={{ marginRight: 2 }}>
                      {user.user.fullname[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" component="div">
                        {user.user.fullname}
                      </Typography>
                    </Box>
                  </Box>
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
                    value={commentVal}
                    onChange={(e) => setCommentVal(e.target.value)}
                  />
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Button sx={{ marginRight: 3 }}>
                      {" "}
                      <Typography
                        sx={{ fontSize: 14, textTransform: "initial" }}
                        variant="caption"
                        onClick={() => setShowCommentBox(false)}
                      >
                        Cancel
                      </Typography>
                    </Button>
                    {createCmtLoader ? (
                      <Box display="flex">
                        <CircularProgress size={24} />
                      </Box>
                    ) : (
                      <Button
                        size="medium"
                        variant="contained"
                        sx={{ borderRadius: 999 }}
                        onClick={handleCommentSubmit}
                      >
                        <Typography
                          sx={{ fontSize: 14, textTransform: "initial" }}
                          variant="caption"
                        >
                          Respond
                        </Typography>
                      </Button>
                    )}
                  </Box>
                </Paper>
              )}

              {/* End Form */}
              {/* Comments */}
              <div id="comment-box">
                {commentList.map((comment) => (
                  <motion.div key={comment._id} layout>
                    <Paper sx={{ padding: 2, marginTop: 2 }}>
                      <Box display="flex" alignItems="center">
                        <Avatar sx={{ marginRight: 2 }}>D</Avatar>
                        <Box>
                          <Typography variant="subtitle1" component="div">
                            {comment.created_by.fullname}
                          </Typography>
                          <Typography
                            variant="caption"
                            component="div"
                            sx={{ marginTop: -1, color: "#9F9F9F" }}
                          >
                            {" "}
                            {moment(comment.created_at).format("LLL")}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography fontSize={13} mt={3}>
                        {comment.content}
                      </Typography>
                    </Paper>
                  </motion.div>
                ))}
              </div>

              {/* End Comments */}
            </Box>
          )}
        </Box>
      </div>
    );
  };

  const handleClickCommentBox = () => {
    setShowCommentBox(true);
    fetchComments(false);
  };

  if (loader) {
    return <Skeleton variant="rectangular" fullWidth mt={2} height={350} />;
  }

  if (post) {
    return (
      <Box sx={{ marginTop: 15 }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{post.post.title}</title>
        </Helmet>
        {showCommentBox && CommentView()}
        <Card sx={{ width: 800, margin: "auto", padding: 2 }}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ marginRight: 2 }}>D</Avatar>
            <Box>
              <Typography variant="subtitle1" component="div">
                {post.post.created_by.fullname}
              </Typography>
              <Typography
                variant="caption"
                component="div"
                sx={{ marginTop: -1, color: "#9F9F9F" }}
              >
                {moment(post.post.created_at).format("LLL")}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              {post.post.title}
            </Typography>
            {post.post.type === "Story" && (
              <>
                <Typography
                  color="#6C6C6C"
                  sx={{
                    fontSize: 17,
                    lineHeight: 2,
                    marginTop: 3,
                    paddingLeft: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="#6C6C6C"
                    dangerouslySetInnerHTML={{ __html: post.post.content }}
                  />
                </Typography>
              </>
            )}

            <Chip label="Story" sx={{ marginTop: 2 }} />
          </Box>
          <Box mt={2}>
            <Button
              sx={{ marginRight: 2, borderRadius: 99999 }}
              onClick={() => {
                if (user.accessToken) {
                  handleLike(post.post._id, post.post.created_by._id);
                }
              }}
            >
              <ThumbUpAltIcon
                sx={{ color: isLike ? "#36B6F9" : "#636466", marginRight: 1 }}
              />
              {post.likes.length}
            </Button>
            <Button
              sx={{ borderRadius: 99999 }}
              // onClick={() => navigate("/detail-post/1")}
              onClick={handleClickCommentBox}
            >
              <ChatBubbleIcon sx={{ color: "#636466", marginRight: 1 }} />
            </Button>
          </Box>
        </Card>
      </Box>
    );
  }
};

export default DetailPost;

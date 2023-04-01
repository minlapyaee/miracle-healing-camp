import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Card, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import moment from "moment";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import api from "../config/api";

const RenderPost = (props) => {
  const { post, data, createLike } = props;
  const [isFound, setIsFound] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [isSavedPost, setIsSavedPost] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(data)

  useEffect(() => {
    setIsFound(data.isLike);
    setIsSavedPost(data.isSavedPost);
    setLikeCount(data.likeCount);
    setCommentCount(data.commentCount);
    // const findIndex = data.likes.findIndex(
    //   (like) => like.created_by === user.user._id
    // );

    // if (findIndex === -1) {
    //   setIsFound(false);
    // } else {
    //   setIsFound(true);
    // }
  }, [data]);

  const handleLike = () => {
    if (data.isLike) {
      setIsFound(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsFound(true);
      setLikeCount((prev) => prev + 1);
    }

    createLike(post._id, post.created_by._id);
  };

  const handleSavePost = (post_id) => {
    // return console.log({ post_id });
    if (data.isSavedPost) {
      setIsSavedPost(false);
    } else {
      setIsSavedPost(true);
    }
    api
      .post("/client/saved_post", JSON.stringify({ post_id }), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {})
      .catch((err) => {
        console.log("errr", err);
      });
  };

  return (
    <Box sx={{ marginTop: 6 }}>
      <Card sx={{ padding: 2 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Avatar sx={{ marginRight: 2 }}>
              {" "}
              {post.created_by.fullname[0]}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" component="div">
                {post.created_by.fullname}
              </Typography>
              <Typography
                variant="caption"
                component="div"
                sx={{ marginTop: -1, color: "#9F9F9F" }}
              >
                {" "}
                {moment(post.created_at).format("LLL")}
              </Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkIcon
              sx={{
                color: isSavedPost ? "#36B6F9" : "#636466",
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (user.accessToken) {
                  handleSavePost(post._id);
                }
              }}
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body1" fontWeight="bold">
            {post.title}
          </Typography>

          <Chip label={post.type} sx={{ marginTop: 2 }} />
        </Box>
        <Box mt={2}>
          <Button
            sx={{ marginRight: 2, borderRadius: 99999 }}
            onClick={(e) => {
              e.stopPropagation();
              if (user.accessToken) {
                handleLike(post._id, post.created_by._id);
              }
            }}
          >
            <ThumbUpAltIcon
              sx={{
                color: isFound ? "#36B6F9" : "#636466",
                marginRight: 1,
              }}
            />
            {likeCount}
          </Button>
          <Button
            sx={{ borderRadius: 99999 }}
            onClick={() => navigate(`/detail-post/${post._id}`)}
          >
            <ChatBubbleIcon sx={{ color: "#636466", marginRight: 1 }} />
            {commentCount}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default RenderPost;

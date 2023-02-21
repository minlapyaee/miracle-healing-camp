import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Card, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import moment from "moment";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const RenderPost = (props) => {
  const { post, data, createLike } = props;
  const [isFound, setIsFound] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const findIndex = data.likes.findIndex(
      (like) => like.created_by === user.user._id
    );

    if (findIndex === -1) {
      setIsFound(false);
    } else {
      setIsFound(true);
    }
  }, [data]);

  const handleLike = () => {
    const findIndex = data.likes.findIndex(
      (like) => like.created_by === user.user._id
    );
    if (findIndex === -1) {
      setIsFound(true);
    } else {
      setIsFound(false);
    }
    createLike(post._id, post.created_by._id);
  };

  return (
    <Box sx={{ marginTop: 6 }}>
      <Card sx={{ padding: 2 }}>
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
              handleLike(post._id, post.created_by._id);
            }}
          >
            <ThumbUpAltIcon
              sx={{
                color: isFound ? "#36B6F9" : "#636466",
                marginRight: 1,
              }}
            />
            {data?.likes?.length}
          </Button>
          <Button
            sx={{ borderRadius: 99999 }}
            onClick={() => navigate(`/detail-post/${post._id}`)}
          >
            <ChatBubbleIcon sx={{ color: "#636466", marginRight: 1 }} />
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default RenderPost;

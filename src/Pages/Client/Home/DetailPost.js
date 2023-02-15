import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

let dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.. It has survived not only five centuries, but also the leap.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus.`;

const DetailPost = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);

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
            zIndex: 100,
            padding: 3,
          }}
        >
          {/* Form */}
          <Paper sx={{ padding: 2 }}>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ marginRight: 2 }}>D</Avatar>
              <Box>
                <Typography variant="subtitle1" component="div">
                  Denny
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
            />
            <Box display="flex" justifyContent="flex-end" alignItems="center">
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
              <Button
                size="medium"
                variant="contained"
                sx={{ borderRadius: 999 }}
              >
                <Typography
                  sx={{ fontSize: 14, textTransform: "initial" }}
                  variant="caption"
                >
                  Respond
                </Typography>
              </Button>
            </Box>
          </Paper>
          {/* End Form */}
          {/* Comments */}
          <Paper sx={{ padding: 2, marginTop: 2 }}>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ marginRight: 2 }}>D</Avatar>
              <Box>
                <Typography variant="subtitle1" component="div">
                  Denny
                </Typography>
              </Box>
            </Box>
            <Typography fontSize={13} mt={3}>
              This is one of the most beautiful things I’ve read. Thank you.
            </Typography>
          </Paper>
          {/* End Comments */}
        </Box>
      </div>
    );
  };

  return (
    <Box sx={{ marginTop: 6 }}>
      {showCommentBox && <CommentView />}
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
          <Typography variant="h6" fontWeight="bold">
            What are the most common life mistakes young people make?
          </Typography>
          <Typography
            color="#6C6C6C"
            sx={{ fontSize: 17, lineHeight: 2, marginTop: 3 }}
          >
            {dummyText}
          </Typography>
          <Chip label="Story" sx={{ marginTop: 2 }} />
        </Box>
        <Box mt={2}>
          <Button
            sx={{ marginRight: 2, borderRadius: 99999 }}
            // onClick={() => navigate("/detail-post/1")}
          >
            <ThumbUpAltIcon sx={{ color: "#636466", marginRight: 1 }} />0
          </Button>
          <Button
            sx={{ borderRadius: 99999 }}
            // onClick={() => navigate("/detail-post/1")}
            onClick={() => setShowCommentBox(true)}
          >
            <ChatBubbleIcon sx={{ color: "#636466", marginRight: 1 }} />0
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default DetailPost;

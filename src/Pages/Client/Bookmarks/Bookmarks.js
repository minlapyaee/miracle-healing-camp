import { Box, Skeleton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import RenderPost from "../../../components/RenderPost";
import { UserContext } from "../../../context/userContext";
import api from "../../../config/api";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import NoDataFound from "../../../components/NoDataFound";

const Bookmarks = () => {
  const { user } = useContext(UserContext);
  const [bookmarkList, setBookmarkList] = useState([]);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    api
      .get(
        "/client/saved_post",
        {},
        {
          accessToken: user.accessToken,
          rftoken_id: localStorage.getItem("rftoken_id"),
        }
      )
      .then((res) => {
        setLoader(false);
        if (res.message === "success") {
          setBookmarkList(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const createLike = (post_id, post_owner_id) => {
    api
      .post("/client/create_like", JSON.stringify({ post_id, post_owner_id }), {
        accessToken: user.accessToken,
        rftoken_id: localStorage.getItem("rftoken_id"),
      })
      .then((res) => {})
      .catch((err) => {
        console.log("errr", err);
      });
  };

  if (loader) {
    return (
      <Box sx={{ width: 800, margin: "auto", marginTop: 15 }}>
        <Skeleton variant="rectangular" fullWidth height={130} />;
        <Skeleton variant="rectangular" fullWidth mt={2} height={300} />;
        <Skeleton variant="rectangular" fullWidth mt={2} height={300} />;
      </Box>
    );
  }

  return (
    <Box sx={{ width: 800, margin: "auto", marginTop: 15 }}>
      BookMarks
      {bookmarkList.length === 0 && <NoDataFound title="No Bookmark Found." />}
      {bookmarkList.length > 0 &&
        bookmarkList.map((data) => {
          return (
            <motion.div
              key={data.post._id}
              layout
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate(
                  `/detail-post/${data.post.post_id._id}/${data.post.post_id.permalink}`
                )
              }
            >
              <RenderPost
                post={data.post.post_id}
                data={{
                  isLike: data.isLike,
                  commentCount: data.commentCount,
                  isSavedPost: data.isSavedPost,
                  likeCount: data.likeCount,
                }}
                createLike={createLike}
              />
            </motion.div>
          );
        })}
      {/* <RenderPost post={post} data={data} createLike={createLike} /> */}
    </Box>
  );
};

export default Bookmarks;

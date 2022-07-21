import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Post.css";
import axios from "axios";

const Post = () => {
  const location = useLocation();
  const id = location.pathname.slice(6);
  const [postToDisp, setPostToDisp] = useState({
    title: "Loading...",
    author: "",
    desc: "",
    content: "",
    id: "",
  });
  useEffect(() => {
    axios
      .get("https://nameless-ocean-31306.herokuapp.com/api/read", {
        params: {
          id: id,
        },
      })
      .then((res) => {
        setPostToDisp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="Post">
      <div className="post__title">{postToDisp.title}</div>
      <div className="post__author">{`By ${postToDisp.author}`}</div>
      <div className="post__desc">{postToDisp.desc}</div>
      <div className="post__content">{postToDisp.content}</div>
      <Link
        style={{
          color: "gray",
          textDecoration: "none",
          margin: "10px",
          padding: "5px",
        }}
        to="/"
      >
        <div className="go_home">Home</div>
      </Link>
    </div>
  );
};

export default Post;

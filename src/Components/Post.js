import React from "react";
import { Link, useLocation } from "react-router-dom";
import { posts } from "./Posts";
import "./Post.css";

const Post = () => {
  const location = useLocation();
  const id = parseInt(location.pathname.slice(6));
  const postToDisp = posts[id - 1];
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

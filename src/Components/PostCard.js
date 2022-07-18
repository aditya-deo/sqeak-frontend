import React from "react";
import "./PostCard.css";

const PostCard = (props) => {
  return (
    <div className="postCard">
      <div className="title">{props.post.title}</div>
      <div className="author">{props.post.author}</div>
      <div className="desc">{props.post.desc}</div>
    </div>
  );
};

export default PostCard;

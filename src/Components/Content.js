import React from "react";
import PostCard from "./PostCard";
import { posts } from "./Posts";
import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <div className="posts">
        {posts.map((post) => {
          return (
            <Link
              classname="postLink"
              to={`/read/${post.id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <PostCard key={post.id} post={post} />
            </Link>
          );
        })}
      </div>
      <div className="filter">Post Filters Coming Soon...</div>
    </div>
  );
};

export default Content;

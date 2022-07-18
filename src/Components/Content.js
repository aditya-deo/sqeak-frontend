import React from "react";
import PostCard from "./PostCard";
import { posts } from "./Posts";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="posts">
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
      <div className="filter">Post Filters Coming Soon...</div>
    </div>
  );
};

export default Content;

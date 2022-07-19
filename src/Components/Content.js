import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./Content.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Content = () => {
  const [POSTCARDS, setPOSTCARDS] = useState([
    {
      _id: 0,
      title: "",
      author: "",
      desc: "",
      content: "",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((res) => {
        // console.log(res);
        setPOSTCARDS(res.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="content">
      <div className="posts">
        {POSTCARDS.map((post) => {
          return (
            <Link
              key={post.id}
              className="postLink"
              to={`/read/${post.id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <PostCard post={post} />
            </Link>
          );
        })}
      </div>
      <div className="filter">Post Filters Coming Soon...</div>
    </div>
  );
};

export default Content;

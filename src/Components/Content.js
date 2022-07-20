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

  const [joke, setJoke] = useState("A joke might appear here soon...");
  useEffect(() => {
    axios
      .get("/cards")
      .then((res) => {
        // console.log(res);
        var newData = res.data;
        newData.reverse();
        setPOSTCARDS(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://v2.jokeapi.dev/joke/Any?safe-mode&type=single")
      .then((res) => {
        setJoke(res.data.joke);
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
      <div className="filter">{joke}</div>
    </div>
  );
};

export default Content;

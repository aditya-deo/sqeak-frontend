import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./Content.css";
import { Link } from "react-router-dom";
import axios from "axios";
import uniqid from "uniqid";
import { Rings } from "react-loader-spinner";

const Content = () => {
  const [POSTCARDS, setPOSTCARDS] = useState([]);

  const [joke, setJoke] = useState("A wild joke will appear soon...");
  useEffect(() => {
    axios
      .get("https://nameless-ocean-31306.herokuapp.com/api/cards")
      .then((res) => {
        console.log(res.data);
        // newData.reverse();
        let receivedData = res.data;
        setPOSTCARDS(receivedData);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://v2.jokeapi.dev/joke/Any?safe-mode&type=single")
      .then((res) => {
        setJoke(res.data.joke);
      });
  }, []);

  return (
    <div className="content">
      <div className="posts">
        {POSTCARDS.length > 0 ? (
          POSTCARDS.map((post) => {
            return (
              <Link
                key={post.id}
                className="postLink"
                to={`/read/${post.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <PostCard key={uniqid()} post={post} />
              </Link>
            );
          })
        ) : (
          <Rings color="black" height={80} width={80}></Rings>
        )}
      </div>
      <div className="filter">{joke}</div>
    </div>
  );
};

export default Content;

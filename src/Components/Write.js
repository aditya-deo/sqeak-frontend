import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import uniqid from "uniqid";
import "./Write.css";

const Write = () => {
  const [goHome, setGoHome] = useState(false);
  const [title, setTitle] = useState("");
  const [author] = useState(localStorage.getItem("sqeak_displayName"));
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const handleButtonClick = (e) => {
    axios
      .post("https://nameless-ocean-31306.herokuapp.com/api/publish", {
        id: uniqid(),
        title: title,
        author: author,
        desc: desc,
        content: content,
      })
      .then((res) => {
        setGoHome(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form className="write_form">
        <div>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="title_input"
            type="text"
            placeholder="Title..."
          ></input>
        </div>
        <div>
          <input
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            type="text"
            className="desc_input"
            placeholder="Description"
          ></input>
        </div>
        <div>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Content..."
            className="textArea_content"
          ></textarea>
        </div>
        <div>
          <button
            className="publish_button"
            type="button"
            onClick={handleButtonClick}
          >
            Publish
          </button>
        </div>
      </form>
      {goHome ? <Navigate to="/" /> : <></>}
    </>
  );
};

export default Write;

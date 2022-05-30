import React, { useState } from "react";
import axios from "axios";

function PutPosts() {
  const [post, setPost] = useState({ title: "" });

  let changeHandler = (event) => {
    setPost({
      [event.target.name]: event.target.value,
    });
    console.log(post);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/posts", post)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", alignItems: "center", padding: "10px" }}
      >
        <div>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={changeHandler}
            placeholder="Enter any technology"
          ></input>
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default PutPosts;

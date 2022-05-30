import React, { useEffect, useState } from "react";
import axios from "axios";

function GetPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      {posts.map((eachPost) => {
        return <div key={eachPost.id}>{eachPost.title}</div>;
      })}
    </>
  );
}

export default GetPosts;

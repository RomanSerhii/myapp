import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts/";

export const ResourcesList = () => {
  const [counter, setCounter] = useState(1);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const incCounter = () => {
    setCounter(counter + 1);
  };
  const fetchPosts = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}${counter}`);
    const data = await response.json();
    setPost(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPosts();
    return () => {
      setPost(null);
    };
  }, [counter]);
  return (
    <div>
      <button className="btn" onClick={incCounter}>
        Posts {counter}
      </button>
      {!post && isLoading && <h2>LOADING DATA ...</h2>}
      {!!post && (
        <div>
          <h3>Post: {post.id}</h3>
          <h4>Title: {post.title}</h4>
          <p>Body: {post.body}</p>
          <hr />
        </div>
      )}
    </div>
  );
};

export default ResourcesList;

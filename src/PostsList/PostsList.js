import React, { useState, useEffect } from "react";

const urlPosts = "https://jsonplaceholder.typicode.com/posts/";

export function PostList() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    const response = await fetch(urlPosts);
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  };

  const handleShowPosts = () => {
    setShowPosts(true);
  };
  const hideShowPosts = () => {
    setShowPosts(false);
  };

  useEffect(() => {
    if (showPosts) {
      fetchPosts();
    }
    return () => {
      setPostList([]);
    };
  }, [showPosts]);
  return (
    <div>
      <button className="btn" onClick={handleShowPosts}>
        Показати усі пости
      </button>
      <button className="btn" onClick={hideShowPosts}>
        Сховати усі пости
      </button>
      {!showPosts && <p>Натисніть кнопку, щоб показати список постів.</p>}
      {showPosts && !isLoading && (
        <div>
          {postList.map((post) => (
            <div key={post.id}>
              <h2>Post: {post.id}</h2>
              <h3>Title: {post.title}</h3>
              <p>Body: {post.body}</p>
            </div>
          ))}
        </div>
      )}
      {isLoading && <p>LOADING DATA ...</p>}
    </div>
  );
}
export default PostList;

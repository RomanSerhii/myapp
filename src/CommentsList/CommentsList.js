import React, { useState, useEffect } from "react";

const urlComments = "https://jsonplaceholder.typicode.com/comments/";

export function CommentsList() {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const fetchComments = async () => {
    setIsLoading(true);
    const response = await fetch(urlComments);
    const data = await response.json();
    setCommentList(data);
    setIsLoading(false);
  };

  const handleShowComments = () => {
    setShowComments(true);
  };
  const hideShowComments = () => {
    setShowComments(false);
  };

  useEffect(() => {
    if (showComments) {
      fetchComments();
    }
    return () => {
      setCommentList([]);
    };
  }, [showComments]);
  return (
    <div>
      <button className="btn" onClick={handleShowComments}>
        Показати усі коментарі
      </button>
      <button className="btn" onClick={hideShowComments}>
        Сховати усі коментарі
      </button>
      {!showComments && (
        <p>Натисніть кнопку, щоб показати список коментарів.</p>
      )}
      {showComments && !isLoading && (
        <div>
          {commentList.map((comment) => (
            <div key={comment.id}>
              <h2>Comment: {comment.id}</h2>
              <h3>Name: {comment.name}</h3>
              <h4>Email: {comment.email}</h4>
              <p>Body: {comment.body}</p>
            </div>
          ))}
        </div>
      )}
      {isLoading && <p>LOADING DATA ...</p>}
    </div>
  );
}
export default CommentsList;

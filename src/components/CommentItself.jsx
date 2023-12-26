import React from "react";
//const CommentItself = ({ comment, onDelete }) => {
const CommentItself = ({ comment }) => {
  // da numeri a stelle
  const renderStars = (rate) => {
    return "⭐".repeat(rate);
  };

  return (
    <>
      <span className="d-block">{comment.author} scrive:</span>
      <span className="d-block">{renderStars(comment.rate)}</span>
      <span className="fst-italic mt-2 mb-0">"{comment.comment}"</span>
      {/* <button onClick={() => onDelete(comment._id)} className="btn btn-outline-danger p-0 px-1 my-2">
        Delete
      </button> */}
    </>
  );
};

export default CommentItself;

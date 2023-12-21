import React from "react";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </>
  );
};

export default BookList;

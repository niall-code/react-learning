import React from "react";
import Book from "./Book";

function RenderingLists() {

  const bookList = [
    "to kill a mockingbird",
    "the great gatsby",
    "the catcher in the rye",
  ];

  const books = [
    {
      title: "to kill a mockingbird",
      author: "harper lee",
      pages: 281,
    },
    {
      title: "the great gatsby",
      author: "f. scott fitzgerald",
      pages: 218,
    },
    {
      title: "the catcher in the rye",
      author: "j. d. salinger",
      pages: 234,
    },
  ];

  return (
    <div>

      {/* Items from `bookList` array */}
  
      {bookList.map((book) => {
        return <h2 key={book}>{book}</h2>;
      })}

      <hr />

      {/* Properties from `books` array of objects */}

      {books.map((book) => {
        return (
          <div key={book.title}>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
          </div>
        );
      })}

      <hr />

      {/* Properties from `books` array of objects, presented using custom
      element based on HTML-returning function imported from Book.js */}

      {books.map((book) => {
        return <Book key={book.title} book={book} />;
      })}
    </div>
  );

}

export default RenderingLists;

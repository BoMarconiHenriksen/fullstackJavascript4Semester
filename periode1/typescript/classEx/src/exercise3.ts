/* a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
title, author:  all strings
published : Date
pages: number */

interface IBook {
  title: string;
  author: string;
  pages?: number;
  publish?: Date;
}

// b) Create a function that takes an IBook instance and test it with an object instance.
function printBook(bookObject: IBook) {
  console.log(
    bookObject.author,
    bookObject.title,
    bookObject.pages,
    bookObject.publish
  );
}

let myBook = { author: "Bob Hansen", title: "Den Lange Vej", pages: 2043 };

printBook(myBook);

// c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are explained.
// d) Change the interface to make published and pages become optional - Verify the new behaviour.
// e) Change the interface to make author readonly - Verify the new behaviour.
// f) Create a class Book and demonstrate the "Java way" of implementing an interface.


class Book {
  constructor(title, author, ISBN, availability=true) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availability = availability;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(ISBN) {
    this.books = this.books.filter((book) =>
      book.ISBN !== ISBN);
  }

  displayAvailableBooks() {
    console.log("Available Books");
    this.books.forEach((book, index) => {
      if (book.availability) {
        console.log(`${index+1}. ${book.title} by ${book.author}`);
      }
    });
  }
}

///////////////// INHERITANCE ///////////////////////////
class ReferenceBook extends Book {
  constructor(title, author, ISBN, category, availability = true) {
    super(title, author, ISBN, availability);
    this.category = category;
  }
}

// creating new library
const library = new Library();

// Adding books to the library
const book1 = new Book("The Great Gatsby", "F.Scott Fitzgerald", "9780743273565")

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780060935467");

const book3 = new ReferenceBook("1984", "George Orwell","9780451524935", "Dystopian Fiction");

const book4 = new Book("Origin", "Dan Brown", "9780525563709");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

// display boks avialable in the library
library.displayAvailableBooks();

console.log("\nRemoving book........\n")

// Remove book from library

library.removeBook("9780743273565");

// display available books
library.displayAvailableBooks();
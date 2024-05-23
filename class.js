class Book {
  constructor(title, author, publicationYear, genre, status = "available") {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.status = status;
    this.genre = genre;
  }

  getInfo() {
    return `${this.title} by ${this.author} published in ${this.publicationYear}`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBook(title) {
    return this.books.find((book) => {
      return book.title === title;
    });
  }

  removeBook(title) {
    this.books = this.books.filter((book) => {
      return book.title !== title;
    });
  }

  changeStatus(title) {
    const book = this.findBook(title);
    if (book) {
      book.status = book.status === "available" ? "borrowed" : "available";
    }
  }

  getAllBooks() {
    return this.books;
  }

  getAvailableBooks() {
    return this.books.filter((book) => {
      return book.status === "available";
    });
  }
}

const libraryEcoleIt = new Library();
libraryEcoleIt.addBook(
  new Book("The Alchemist", "Paulo Coelho", 1988, "Adventure")
);

libraryEcoleIt.addBook(
  new Book("The Da Vinci Code", "Dan Brown", 2003, "Mystery", "borrowed")
);

const books = libraryEcoleIt.getAllBooks();
console.log("tous les livre", books);

const availableBooks = libraryEcoleIt.getAvailableBooks();
console.log("livres disponibles", availableBooks);

const fs = require("fs");

const readStream = fs.createReadStream("./largefile.txt");

readStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on("end", () => {
  console.log("There is no more data to read.");
});

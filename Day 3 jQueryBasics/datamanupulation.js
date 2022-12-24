class Book {
  constructor(id, name, author, price) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
  }
}

class BookRepository {
  constructor() {
    this.books = [];
  }

  addNewBook(book) {
    this.books.push(book);
  }

  getBookById = (id) => this.books.find((bk) => bk.id == id);

  getAllBooks() {
    return this.books;
  }

  updateBook(modifiedBook) {
    const index = this.books.findIndex((book) => {
      book.id == modifiedBook.id;
    });
    this.books.splice(index, 1, modifiedBook);
  }

  deleteBookById(id) {
    const index = this.books.findIndex((book) => {
      book.id == id;
    });
    this.books.splice(index, 1);
  }
}

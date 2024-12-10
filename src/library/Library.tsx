export class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    this.books.push({ title, author });
  }

  findBook(title) {
    const book = this.books.find(book => book.title === title);
    return book || null;
  }

  deleteBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  getAllBooks() {
    return this.books;
  }
}

module.exports = Library;


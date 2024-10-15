import { Book } from './Book'

export class Reader {
  public name: string
  private borrowedBooks: Book[] = []

  constructor(name: string) {
    this.name = name
  }

  borrowBook(book: Book) {
    if (book.isAvailable()) {
      book.borrowBook()
      this.borrowedBooks.push(book)
    }
  }
}

import { Book } from './Book'
import { Reader } from './Reader'

export class Library {
  private books: Book[] = []

  public addBook(book: Book): void {
    this.books.push(book)
  }

  public listAvailableBooks(): Book[] {
    console.log(this.books)
    return this.books
  }

  public checkOutBook(reader: Reader, book: Book): void {
    this.books.forEach((bk) => {
      if (bk.title === book.title) {
        reader.borrowBook(bk)
        this.books.splice(this.books.indexOf(bk), 1)
        console.log(
          `Book ${book.title} borrowed successfully by ${reader.name}`
        )
      }
    })
  }
}

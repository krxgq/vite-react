import { Reader } from './Reader'
import { Book } from './Book'
export class Librarian extends Reader {
  constructor(name: string) {
    super(name)
  }

  public returnBook(reader: Reader, book: Book): void {
    book.returnBook()
    console.log(`${book.title} has been returned by ${reader.name}`)
  }
}

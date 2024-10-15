import { Book } from './Book.tsx'
import { Reader } from './Reader.tsx'
import { Library } from './Library.tsx'
import { Librarian } from './Librarian.tsx'
import './App.css'

function App() {
  const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', true)
  const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', true)
  const reader = new Reader('Bohdan')
  const librarian = new Librarian('John Doe')

  const library = new Library()
  library.addBook(book1)
  library.addBook(book2)

  library.listAvailableBooks()
  library.checkOutBook(reader, book1)

  library.listAvailableBooks()

  librarian.returnBook(reader, book1)

  library.listAvailableBooks()
  return (
    <>
      {/*  <div>
        <h3>Reader Information</h3>
        <p>{reader.borrowBook(book)}</p>
      </div>
      <h1>Available Books:</h1>
      Library.listAvailableBooks.forEach(element => {
        
      });
      <details>
        <summary>{book1.title}</summary>
        <p>Title: </p>
        <p>Author: {book1.author}</p>
      </details> */}
    </>
  )
}

export default App

export class Book {
  public title: string
  public author: string
  private available: boolean

  constructor(title: string, author: string, available: boolean) {
    this.title = title
    this.author = author
    this.available = available
  }

  public isAvailable() {
    return this.available
  }
  public borrowBook() {
    if (this.available) {
        this.available = false;
        console.log(`Book "${this.title}" has been borrowed.`);
    } else {
        console.log(`Book "${this.title}" isnt available.`);
    }

  }
  public returnBook() {
    this.available = true
  }
  public getAuthor() {
    return this.author
  }
  public getTitle() {
    return this.title
  }
}

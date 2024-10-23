/* Write a constructor for making “Book” objects. We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book. */

// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead ? 'have read' : 'have not read yet'}`;
    }
}

const book1 = new Book('A Shepherd\'s Life', 'James Rebanks', 300, true);

console.log(book1.info());
console.log(book2.info());
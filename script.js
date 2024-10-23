const myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;    
}

// Option 1, using prototype
Book.prototype.addBookToLibrary = function(library) {
    library.push(this);
}

//Option 2, more of a standard function
// function addBookToLibrary(title, author, pages, haveRead) {
//     const newBook = new Book(title, author, pages, haveRead)
        
//     myLibrary.push(newBook);
// }


const book1 = new Book('A Shepherd\'s Life', 'James Rebanks', 300, true);
const book2 = new Book("Little Women", "Lousia May Alcott", 350, false);
const book3 = new Book("Borrowbeck", "Andrew Michael Hurley", 400, false);
const book4 = new Book("Alchemy", "Rory Sutherland", 280, true);

//Option 1
book1.addBookToLibrary(myLibrary);
book2.addBookToLibrary(myLibrary);
book3.addBookToLibrary(myLibrary);
book4.addBookToLibrary(myLibrary);

//Option 2
// addBookToLibrary('A Shepherd\'s Life', 'James Rebanks', 300, true);
// addBookToLibrary("Little Women", "Lousia May Alcott", 350, false);

console.log(myLibrary);

//Loop through the library array. First attempt is a standard loop from the array. Second is having the function as a prototype.

const printLibrary = () => {
    myLibrary.forEach(book => {
        console.log(book.title)
    })
}

printLibrary()
    



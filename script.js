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

// Add a method to the Book prototype to toggle the read status
Book.prototype.toggleReadStatus = function(isChecked) {
    this.haveRead = isChecked;
}

//Option 2, more of a standard function
// function addBookToLibrary(title, author, pages, haveRead) {
//     const newBook = new Book(title, author, pages, haveRead)
        
//     myLibrary.push(newBook);
// }

function outputLibraryToTable() {
    const tbody = document.querySelector('table tbody');
    tbody.textContent = '';
    myLibrary.forEach((book, index) => {
        const trow = document.createElement('tr'); 

        Object.keys(book).slice(0, 4).forEach(key => {
            const td = document.createElement('td'); // Create a td for each property
            
            // Check if the key is "haveRead" and display "Read" or "Unread"
            if (key === 'haveRead') {
                // Handle the "haveRead" property with a custom checkbox
                const label = document.createElement('label');
                label.classList.add('custom-checkbox');

                // Create checkbox input
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = book.haveRead; // Set checked status based on the haveRead property
                checkbox.dataset.index = index; // Set data attribute

                 // Add the event listener to the checkbox
                 checkbox.addEventListener('click', function() {
                    toggleReadStatus(index, checkbox.checked); // Call your function to toggle read/unread status
                });

                // Create the span for the checkmark
                const span = document.createElement('span');
                span.classList.add('checkmark');

                // Append the checkbox and span to the label
                label.appendChild(checkbox);
                label.appendChild(span);        
                

                // Append the label (custom checkbox) to the td
                td.appendChild(label);
            } else {
                // For other properties (title, author, pages)
                td.textContent = book[key]; // Set the content of td to the book's property value
            }       
            
            trow.appendChild(td); // Append the td to the row
        });

        const deleteBtn = document.createElement('td');
        const button = document.createElement('button');
        button.classList.add('btn-delete'); // Add class to the button
        button.setAttribute('id', 'btnDelete'); // Set the ID for the button
        button.dataset.index = index;
        button.textContent = 'Delete?'; // Set the button text
        
        // Add an event listener to the button to call deleteBook when clicked
        button.addEventListener('click', function() {
            deleteBook(button.dataset.index); // Call deleteBook with the index
        });
        
        deleteBtn.appendChild(button); // Append the button to the td
        trow.appendChild(deleteBtn); // Append the td to the row

        tbody.appendChild(trow);
    })

}

function deleteBook(bookIndex) {
    myLibrary.splice(bookIndex,1);
    outputLibraryToTable();
}

function toggleReadStatus(index, isChecked) {
    myLibrary[index].toggleReadStatus(isChecked); // Call the prototype method
    console.log(myLibrary);
}

function pageLoad() {
    const book1 = new Book('A Shepherd\'s Life', 'James Rebanks', 300, true);
    const book2 = new Book("Little Women", "Lousia May Alcott", 350, false);
    const book3 = new Book("Borrowbeck", "Andrew Michael Hurley", 400, false);
    const book4 = new Book("Alchemy", "Rory Sutherland", 280, true);
    
    //Option 1
    book1.addBookToLibrary(myLibrary);
    book2.addBookToLibrary(myLibrary);
    book3.addBookToLibrary(myLibrary);
    book4.addBookToLibrary(myLibrary);

    outputLibraryToTable();
}

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const sideForm = document.getElementById('sideForm');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    const addBookForm = document.getElementById('addBookForm');
    const btnAddBook = document.getElementById('btnAddBook')
    
    // Form open/close functions
    function openForm() {
      sideForm.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    function closeForm() {
      sideForm.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      // Optional: reset form when closing
      addBookForm.reset();
    }     
    
    // Event listeners
    closeBtn.addEventListener('click', closeForm);
    overlay.addEventListener('click', closeForm);
    btnAddBook.addEventListener('click', openForm);

    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        
        // Get form data
        const formData = new FormData(addBookForm);
        const newBook = new Book(formData.get('title'),formData.get('author'),formData.get('pages'),formData.get('status'));

        newBook.addBookToLibrary(myLibrary);

        outputLibraryToTable();
        // console.log(myLibrary);
    });

    pageLoad();
  
  });


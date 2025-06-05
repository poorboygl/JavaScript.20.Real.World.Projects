//Book class:
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
   static displayBooks() {
        const books = Store.getBooks();
        
        books.forEach((book) => UI.addBookToList(book));
   }

   static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
   }

   static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
   }

   static deleteBook(item) {
        if (item.classList.contains('delete')) {
            item.parentElement.parentElement.remove();
        }
   }

    static showAlerts(message, className) {
        const div = document.createElement('div');

        div.className = `alert alert-${className}`;

        div.appendChild(document.createTextNode(message));


        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);

    }
}

class Store {

    static  books = [
        { title: 'Book One', author: 'John Doe', isbn: '123456' },
        { title: 'Book Two', author: 'Jane Doe', isbn: '654321' },
        { title: 'Book Three', author: 'Jim Doe', isbn: '789012' }
    ];

    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [...this.books]; // Initial books array
            localStorage.setItem('books', JSON.stringify(books));
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Khi trang web đã tải xong toàn bộ phần HTML, thì gọi hàm UI.displayBooks() để hiển thị sách lên giao diện.
// add script.js file to the end of body tag in index.html
//document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.addEventListener('DOMContentLoaded', () => {

    //Event: display books
    UI.displayBooks();

    //Event: add and delete books
    addBook(); 
    deleteBook();
  
});

function deleteBook() {
    //Event: delete a book
    document.querySelector('#book-list').addEventListener('click', (e) => {       
        //Prevent default action
        //Prevent the link from redirecting
        e.preventDefault();

        //Delete book
        UI.deleteBook(e.target); 
        //Remove book from store
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent); 
        UI.showAlerts('Book removed', 'success');  
    });
}

function addBook() {
    //Event: add a book
    document.querySelector('#book-form').addEventListener('submit', (e) => {
        //Prevent default action
        //Prevent the form from submitting and refreshing the page
        e.preventDefault();

        //Get form values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        //Validate
        if (title === '' || author === '' || isbn === '') {
            UI.showAlerts('Please fill in all fields', 'danger');
            return;
        }

        //Instantiate book
        const book = new Book(title, author, isbn);

        //Add book to UI
        UI.addBookToList(book);
        //Add book to store
        Store.addBook(book);

        //Clear fields
        UI.clearFields();
        //Show success message
        UI.showAlerts('Book Added', 'success');

    });
}






//? document.addEventListener('sự_kiện', hành_động); 
//? addEventListener là một hàm dùng để lắng nghe (listen) và xử lý (handle) một sự kiện cụ thể xảy ra trên phần tử HTML.
//? element.addEventListener(event, function);
/*
    button.addEventListener('click', () => {
        alert('Đã click!');
    });

     Khi người dùng bấm nút (click), đoạn mã bên trong sẽ chạy.
*/

/*	Shift + Alt + A tạo comment thế này  */

/* 
    document.addEventListener('DOMContentLoaded', UI.displayBooks);
    “Khi trang web đã tải xong toàn bộ phần HTML, thì gọi hàm UI.displayBooks() để hiển thị sách lên giao diện.”

*/

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
        const StoreBooks = [
            { title: 'Book One', author: 'John Doe', isbn: '123456' },
            { title: 'Book Two', author: 'Jane Doe', isbn: '654321' }
        ];
        const books = StoreBooks;
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
}



// Khi trang web đã tải xong toàn bộ phần HTML, thì gọi hàm UI.displayBooks() để hiển thị sách lên giao diện.
// add script.js file to the end of body tag in index.html
//document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.addEventListener('DOMContentLoaded', () => {

    //Event: display books
    UI.displayBooks()

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
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        //Instantiate book
        const book = new Book(title, author, isbn);

        //Add book to UI
        UI.addBookToList(book);

        //Clear fields
        UI.clearFields();

    });

});





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

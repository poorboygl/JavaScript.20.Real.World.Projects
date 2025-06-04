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
   }
}

const formElem = document.getElementById('form');
const tableElem = document.querySelector('.elList table');
const titleElem = document.getElementById('title');
const authorElem = document.getElementById('author');
const isbnElem = document.getElementById('ISBN');
let books = [];

class Book {
    constructor(title, author, isbn, deleteBtn = '') {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    showError() {
        let errorMessage = document.createElement('p');
        errorMessage.className = "error";
        errorMessage.innerHTML = "Please fill all the fields!";
        let firstInput = document.getElementById('first-input');
        formElem.insertBefore(errorMessage, firstInput);
        setTimeout(() => {
                errorMessage.remove();
            },
            2000);
    }

    showSuccess() {
        let successMessage = document.createElement('p');
        successMessage.className = "success";
        successMessage.innerHTML = titleElem.value + " added!";
        let firstInput = document.getElementById('first-input');
        formElem.insertBefore(successMessage, firstInput);
        setTimeout(() => {
                successMessage.remove();
            },
            2000);
    }

    clearFields() {
        formElem.reset();
    }

    addBook(book) {
        let row = tableElem.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();

        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author;
        cell3.innerHTML = book.isbn;
        cell4.innerHTML = '<a href = "#"> X </a>';

        book.deleteBtn = cell4;

    }

    deleteBook(book) {
        book.deleteBtn.addEventListener('click', (e) => {
            let index = book.deleteBtn.parentElement.rowIndex;
            tableElem.deleteRow(index);
            books.splice(index - 1, 1);
        })
    }
}


formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    let ui = new UI();

    if (titleElem.value === '' || authorElem.value === '' || isbnElem.value === '') {
        ui.showError();
    } else {
        ui.showSuccess();
        let book = new Book(titleElem.value, authorElem.value, isbnElem.value);
        ui.addBook(book);
        // console.log(book.deleteBtn.value.parentElement.value.rowIndex.value);
        // book.deleteBtn.addEventListener('click', ui.deleteBook(book));
        ui.deleteBook(book);
        books.push(book);
    }
    ui.clearFields();
});
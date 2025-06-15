
//Select elements from the DOM
const form = document.querySelector('#itemform');
const itemInput = document.querySelector('#itemInput');
const itemsList = document.querySelector('#itemsList');
const filters = document.querySelectorAll('.nav-item');

//Create an empty item list
let todoItems = [];

const renderItems = (todoItems) => {
    // Clear the current list
    itemsList.innerHTML = '';
    // Loop through the todoItems array and create list items
    if (todoItems.length > 0) {
        todoItems.forEach((item) => {

            const iconClass = item.isDone
                ? "bi-check-circle-fill"
                : "bi-check-circle";

            let liTag = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                   <span class="title" data-time=${item.addedAt}>${item.name}</span>
                   <span>
                       <a href="#" data-done><i class="bi ${iconClass}  green"></i></a>
                       <a href="#" data-edit><i class="bi bi-pencil-square blue"></i></a>
                       <a href="#" data-delete><i class="bi bi-x-circle red"></i></a>
                   </span>
            </li>`;
            itemsList.insertAdjacentHTML("beforeend", liTag);
        });
    }
}

//get item form local storage
const getLocalStorage = () => {
    const items = localStorage.getItem('todoItems');
    if (items) {
        todoItems = JSON.parse(items);
    } else {
        todoItems = [];
    }

    renderItems(todoItems);
};

//set in local storage
const setLocalStorage = (todoItems) => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
};

// Function to render the todo items
document.addEventListener('DOMContentLoaded', () => {
    //get local storage items when the DOM is loaded
    getLocalStorage();

    form.addEventListener('submit', (e) => {
        // Prevent the default form submission
        e.preventDefault();
        // Get the value from the input field
        // mục đích trim is to remove any leading or trailing whitespace
        const itemName = itemInput.value.trim();
        if (itemName.length === 0) {
            alert('Please enter a Task.');
            return;
        }

        const item = {
                name:   itemName,
                completed: false,
                addedAt: new Date().getTime()
        };
        todoItems.push(item);
        setLocalStorage(todoItems);
        getLocalStorage();
        itemInput.value = ''; // Clear the input field
    });

  
});


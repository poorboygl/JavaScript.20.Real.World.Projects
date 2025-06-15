
//Select elements from the DOM
const form = document.querySelector('#itemform');
const itemInput = document.querySelector('#itemInput');
const itemList = document.querySelector('#itemsList');
const filters = document.querySelectorAll('.nav-item');

//Create an empty item list

let todoItems = [];

// Function to render the todo items
document.addEventListener('DOMContentLoaded', () => {
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

        const itemobj = {
                name:   itemName,
                completed: false,
                addedAt: new Date().getTime()
        };
        
    });
  
});


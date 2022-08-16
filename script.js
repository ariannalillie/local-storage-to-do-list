const addButton = document.querySelector(".user-button");
const userInput = document.querySelector(".user-input");
const ul = document.querySelector(".list");

let toDoItem = "";

userInput.addEventListener("change", (event) => {
  toDoItem = event.target.value;
});

addButton.addEventListener("click", (event) => {

  // Create list item
  let li = document.createElement('li');

  // Add toDoItem text to list item created above
  li.appendChild(document.createTextNode(toDoItem));

  // Add class name 'list-item' to list item
  li.classList.add('list-item')

  // Add list item to unordered 
  ul.appendChild(li);

  // Reset input box state back to empty 
  userInput.value= ""
  // toDoItem = ""
});

// Edge cases to think about:
// 'ToDoItem' still has a value (try clicking add button after user input field is clear)
// Once the above is handled, our value is blank but we still keep creating li's if we click add


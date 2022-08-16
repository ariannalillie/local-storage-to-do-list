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

  // Add toDoListItem text to list item created above
  li.appendChild(document.createTextNode(toDoItem));

  // Add class name 'list-item' to list item
  li.classList.add('list-item')

  // Add list item to unordered 
  ul.appendChild(li);

  // Reset input box state back to empty 
  userInput.value= ""
});

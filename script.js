const addButton = document.querySelector(".user-button");
const userInput = document.querySelector(".user-input");
const ul = document.querySelector(".list");

let toDoItem = "";

userInput.addEventListener("change", (event) => {
  toDoItem = event.target.value;
});

addButton.addEventListener("click", (event) => {

  // Create list item and add toDoItem as the text
  let li = document.createElement('list-item');
  li.appendChild(document.createTextNode(toDoItem));
  li.classList.add('list-item')
  ul.appendChild(li);
  userInput.value= ""
});

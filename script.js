const addButton = document.querySelector(".user-button");
const userInput = document.querySelector(".user-input");
const ul = document.querySelector(".list");

let toDoItem = "";

userInput.addEventListener("change", (event) => {
  toDoItem = event.target.value;
});

addButton.addEventListener("click", (event) => {
  let li = document.createElement(toDoItem);
  li.appendChild(document.createTextNode(`* ${toDoItem}`));
  ul.appendChild(li);
});

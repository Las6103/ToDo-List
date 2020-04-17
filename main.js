//new item needs to go to list
//how?
//use dom to select new item value
// on add item click
//createElement(li)
//add new item variable to list
//use appendchild

//click on X removechild
//

let input = document.getElementById("enter");
let submit = document.getElementById("submit");
let ul = document.querySelector(".list");
let button = document.querySelector(".button");

submit.addEventListener("click", createListElement);

function createListElement() {
  const newItem = document.createElement("li");
  newItem.innerHTML = input.value;
  newItem.appendChild(createButton());
  ul.appendChild(newItem);
}

function createButton() {
  const newButton = document.createElement("button");
  newButton.innerHTML = "X";
  newButton.onclick = removeListItem;
  return newButton;
}

function removeListItem(event) {
  ul.removeChild(event.target.parentNode);
}

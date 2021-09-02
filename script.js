/*
Title:To Do Application with vanilla js DOM
Description:This is file has all the js function nescessary to control the to do application
Author: Md Sakil Islam
Date:02/09/2021
*/

//Select element & assign them to variable
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let compleeteUl = document.querySelector(".complete-list ul");

//function
let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  //bind the new list item to the incomplete list
  bindInCompleteItems(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.className = "delete";
  listItem.appendChild(deletebtn);
  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  compleeteUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};
let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindInCompleteItems = function (taskItem, checkboxclick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxclick;
};

let bindCompleteItems = function (taskItem, deletebuttonclick) {
  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deletebuttonclick;
};

for (let i = 0; i < todoUl.children.length; i++) {
  bindInCompleteItems(todoUl.children[i], completeTask);
}
for (let i = 0; i < compleeteUl.children.length; i++) {
  bindCompleteItems(compleeteUl.children[i], deleteTask);
}
form.addEventListener("submit", addTask);

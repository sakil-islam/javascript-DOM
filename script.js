// console.log(typeof document);
// console.log(document.all);

// for (let element of document.all) {
//   console.log(element);
// }
// document.title = "Hi Sakil";
// console.log(document.all[7]);
// console.log(document.getElementById("new-task"));

// let hearderelement = document.getElementById("header");
// hearderelement.textContent = "to-do App";
// hearderelement.style.fontSize = "50px";

// console.dir(document);

//Get Element By ID/ClassName

// let itemUl = document.getElementById("items");
// let items = itemUl.getElementsByClassName("item");
// for (let i = 0; i < items.length; i++) {
//   items[i].style.color = "red";
// }

//query selector
// let newTask = document.querySelector("#new-task");
// console.log(newTask);

// let lastItem = document.querySelector(".item:first-child");

// lastItem.style.color = "red";

// let lastItems = document.querySelectorAll(".item:last-child");
// console.log(lastItems);

// for (let element of lastItems) {
//   element.style.color = "red";
// }

// let lastNthItem = document
//   .querySelector("#items")
//   .querySelector(".item:nth-child(2)");

// lastNthItem.style.color = "red";

//parent child

// const grandparent = document.querySelector(".todo-list");
// const parent = grandparent.children;
// const children = parent[1].children;
// const children = grandparent.querySelectorAll(".item");

// console.log(children);

//Reverse

// const children = document.querySelector(".item");
// const grandparent = children.closest(".todo-list");
// console.log(grandparent);

//children Two
// const children = document.querySelector(".item").nextElementSibling;
// const childrenone = children.previousElementSibling;
// childrenone.style.color = "red";

//creating an element
const divElement = document.createElement("div");

divElement.className = "new-class";
divElement.setAttribute("id", "new-class");
divElement.setAttribute("title", "new-div");

const container = document.querySelector(".todo-list");
// const h2Element = container.querySelector("h2");
// container.insertBefore(divElement, h2Element);

//last child add korar jonno
// container.appendChild(divElement);       //test deya jay na & return kore
// container.append(divElement);         //kisu return kore na undefine return kore

const container = document.querySelector(".todo-list");
// container.appendChild(divElement, document.createElement("p"), "hello world"); // only first ta return kore
container.append(divElement, document.createElement("p"), "hello world"); //sop kisui return kore

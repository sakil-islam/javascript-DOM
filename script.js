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

let lastNthItem = document
  .querySelector("#items")
  .querySelector(".item:nth-child(2)");

lastNthItem.style.color = "red";

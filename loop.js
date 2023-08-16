const items= document.querySelector(".food-container");
//console.log(items);
// const foodItems=[];

// for(const item of items){
//     foodItems.push(item.innerText);
// }
// console.log(foodItems);

//finding child elements
const list= document.querySelectorAll("li")
console.log(list);

console.log(items.children);

//childNodes
console.log(items.childNodes);
//prints the 1st element & last element
console.log(items.firstElementChild.innerText);
console.log(items.lastElementChild.innerText);
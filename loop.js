const items= document.querySelector(".food-container");
const spanEl= document.querySelector("header span");

const handle = (event) =>{
    console.log("clicked");
}
const handleDoc = (event) =>{
    alert("You have clicked "+ this); 
};
spanEl.addEventListener("click", handle);

document.addEventListener("keypress", handleDoc);

setTimeout(()=>{
    spanEl.removeEventListener("click",handle);
},5000);
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
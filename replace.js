const foodConatiner=document.querySelector("#food-container");

//const exisiting=document.querySelector(".food-container:first-child");


const li=document.createElement("li");
li.textContent="Replaced";
li.className="food-item";

//exisiting.replaceWith(li);

const li1= document.createElement("li");
li.textContent="Maggi";
li1.className="food-item";

const li2= document.createElement("li");
li.textContent="Egg";
li1.className="food-item";

foodConatiner.replaceChildren(li1,li2,li);

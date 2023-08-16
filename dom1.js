let inputFood=document.getElementById('input-food');
let inputBtn=document.getElementById('input-btn');
let foodContainer=document.getElementById('food-container');
//console.log(inputFood ,inputBtn);

inputBtn.addEventListener("click",()=>
{
    let divName=document.createElement("div");
    let divBtn=document.createElement("div");
    let newEl= document.createElement("li");

    li.className="food-item";
    li.textContent=inputFood.value;

    foodContainer.append(newEl);
    inputFood.value="";
   
});
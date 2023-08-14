let inputFood=document.getElementById('input-food');
let inputBtn=document.getElementById('input-btn');
let foodContainer=document.getElementById('food-container');
//console.log(inputFood ,inputBtn);

inputBtn.addEventListener("click",()=>
{
    foodContainer.innerHTML+=`<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
});
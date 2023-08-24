// document.addEventListener("keypress",event=>{
//     console.log('keypress',event);
// })

document.addEventListener("keyup",event=>{
    console.log(`keyup: key: ${event.key}, code:${event.code}`);
});

const inputFood = document.querySelector("input-food");

inputFood.addEventListener("keyup",(event)=>{
    if(event.key === 'Enter'){
        alert('Enter');
    }
});

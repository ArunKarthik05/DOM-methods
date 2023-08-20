const form =document.querySelector('form');
const div =document.querySelector('form div');
const p =document.querySelector('form p');

form.addEventListener("click", function(){
    alert('Form');
});

div.addEventListener("click",function(){
    alert('div');
    //stop bubbling
    //event.stopImmediatePropagation();
});

p.addEventListener("click", function(){
    alert('p');
});
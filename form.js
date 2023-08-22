const form = document.querySelector('form');
const input = document.querySelector('form input');
const checkbox = document.querySelector('form input[type="checkbox"]');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    if(!checkbox.checked) {
        alert('check the terms');
        return;
    }
    //Stos default actions for this event
    console.log(input.value,checkbox.checked);
});
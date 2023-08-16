const main=document.getElementById("main");

function createAlert(message){
    const div= document.createElement("div");
    const textNode = document.createTextNode(message);
    //div.textContent="Food is updated";
    div.append(textNode);
    //console.log(div);
    //main.appendChild(div);
    div.className = "alert";
    main.prepend(div);
}
//createAlert("hello");

function createAlertviaTemplate(message){
const template = `
<div class = " alert">
${message}
</div>
`
main.innerHTML += template;
}
//createAlertviaTemplate("heelo templates");
//How to get/set contents via DOM
//-textContent   innerText innerHTML
// const alertEl= document.querySelector(".food-container .food-item");
// console.log(alertEl.innerText);
// console.log(alertEl.innerHTML);
// console.log(alertEl.textContent);

// //alertEl.innerText ="<strong>Modified using textContenttag</strong>"
// alertEl.innerHTML="<strong>Modified using HTMLtag</strong>";
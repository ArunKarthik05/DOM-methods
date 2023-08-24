// //This activates on clicking the button
// document.addEventListener("mousedown",(event)=>{
//     console.log('Mousedown',event);
// })
// document.addEventListener("copy",(event)=>{
//     event.preventDefault();
//     alert("Cant copy");
// })
// //this activates once the hand is taken from click button
// document.addEventListener("mouseup",(event)=>{
//     console.log('Mouseup',event);
// })
//mouse-enter...mouse-out..mouse-over
document.addEventListener("dblclick",(event)=>{
    console.log("dbclick");
})

document.addEventListener("click",(event)=>{
    console.log("click");
})
const foodConatiner=document.querySelector("#food-container");
const dup=document.getElementById("dup");
const resyncBtn=document.getElementById("resync");


//console.log(cloned);
//clones all elements and sub trees(childnodes)


//prints the cloned element
resyncBtn.addEventListener("click",()=>{
        dup.innerHTML="";
        const cloned= foodConatiner.cloneNode(true); 
        dup.append(cloned);
});


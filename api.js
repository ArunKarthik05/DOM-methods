XMLHttpRequest
const request = new XMLHttpRequest();
request.open('GET',"https://jsonplaceholder.typicode.com/users");
request.send();

request.onload =()=>{
    console.log(request);
    if(request.status === 200){
        console.log(JSON.parse(request.response));
    }else{
        console.log(`error: ${request.status}`);
    }
}

//Fetch api-using promises
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    return response.json();
}).then(json=>{
    console.log(json);
});

//async await-disad error handling
async function getApi(){
    let response = await fetch("https://jsonplaceholder.typicode.com");
    let data= await response.json();
    return data;
}

getApi().then(response=>{
    console.log(response);
});

//axios library-cdnjs and paste url on top of file i n html
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    console.log(response);
},err=>{
    console.log(err);
}
);

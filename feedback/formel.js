// const formEl = document.forms[0]; // by Index
const formEl = document.forms.feedback; // by name
const nameElm = formEl.elements.fullName;

//console.log(nameElm);
//3.Methods
nameElm.focus();

//Other events
nameElm.addEventListener("copy", () => {
  alert("cant copy");
});

// Get Elements from Form
// const fullNameEl = formEl.elements[0]; // or by index/bracket notation
// const fullNameEl = formEl.elements.fullName; // or by index/bracket notation
// const typeEl = formEl.elements.type;
// const emailEl = formEl.elements.email;
// const descEl = formEl.elements.description;
// const termsEl = formEl.elements.terms;

// const fullNameEl = formEl.fullName; // you can also do this.

// Object Destructing

const handleSubmit = (event) => {
  //1.Attributes
  event.preventDefault();
  // nameElm.type = "password";

  //2.events
  nameElm.addEventListener("focus", () => {
    console.log("focus");
  });
  nameElm.addEventListener("blur", () => {
    console.log("blurred");
  });

  //const { fullName, type, email, desc, terms } = formEl.elements;
  //Backend API
  const arrayValues = new FormData(formEl);

  //const data = [...arrayValues.entries()]

  //1.encodes spaces in a json string-old way
  // const dataString = data.map((key,value) =>`${encodeURI(key)} = ${encodeURI(value)};`).join("&")

  // const dataString2 = new URLSearchParams(arrayValues).toString()
  // console.log(dataString2);

  //2.JSON-important type

  const jsonData = JSON.stringify(Object.fromEntries(arrayValues));

  // console.log(jsonData);
  //1.XMLHttpRequest

  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/users/2", true);
  xhr.onload = function () {
    const object = JSON.parse(xhr.responseText);
    console.log(object.data.first_name);
    document.getElementById("response").innerText = xhr.responseText;
  };
  xhr.send();
  // console.log("My full name fetched from arrayValues is : " , arrayValues.get("fullName"));
  // console.log([... new FormData(formEl)]);
};

// const handleFormData = (e)=>{

//     const formData=e.formData;
//     const values  = [...formData.values()];
//     console.log([...formData.entries()]);
//     console.log(`values: ${values}`);
//     console.log(`name:${formData.get("fullName")}`);
//     console.log(`keys:[${[...formData.keys()]}]`);
// }

//This handles submit events
formEl.addEventListener("submit", handleSubmit);

//This handles the formdata values and it is then stored in arrayValues
// formEl.addEventListener("formdata",handleFormData);
const nameGreet = document.querySelector("#namegreet");

nameElm.addEventListener("input", (e) => {
  nameGreet.innerText = `Hello ${e.target.value} ,`;
});

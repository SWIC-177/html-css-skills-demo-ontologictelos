// create Array that holds values of inputs in html
// []= array
// ... = spread operator
// In essence what we are doing is building an array from the "inputs" of the html in my case this is the First name, last name, email, and phone number forms
const inputs = [...Array.from(document.querySelectorAll("input"))];
console.log(inputs);

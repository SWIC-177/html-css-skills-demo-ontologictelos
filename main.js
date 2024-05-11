// create Array that holds values of inputs in html
// []= array
// ... = spread operator
// In essence what we are doing is building an array from the "inputs" of the html in my case this is the First name, last name, email, and phone number forms
import { ERRORS } from "./src/utils";
const inputs = [...Array.from(document.querySelectorAll("input"))];
console.log(inputs);

//event listener
// this listens for the event of essentially moving focus
inputs.forEach((el) => {
  el.addEventListener("blur", (e) => {
    console.log("blur event", e.target.id);
  });
});

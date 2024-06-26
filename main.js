// create Array that holds values of inputs in html
// []= array
// ... = spread operator
// In essence what we are doing is building an array from the "inputs" of the html in my case this is the First name, last name, email, and phone number forms
import { ERRORS, hideError, renderError } from "./src/utils";

const inputs = [...Array.from(document.querySelectorAll("input"))];

//event listener
// this listens for the event of essentially moving focus
inputs.forEach((el) => {
  el.addEventListener("blur", (e) => {
    console.log(
      ERRORS.find((error) => error.id === e.target.id).validate(e.target.value),
    );
  });
});

inputs.forEach((el) => {
  el.addEventListener("blur", (e) => {
    const elError = ERRORS.find((error) => error.id === e.target.id);
    if (!elError.validate(e.target.value)) renderError(e.target, elError.msg);
    else hideError(e.target);
  });
});

inputs.forEach((el) => {
  el.addEventListener("focus", (e) => {
    const elError = ERRORS.find((error) => error.id === e.target.id);
    elError.isTouched = true;
    hideError(e.target);
  });
});

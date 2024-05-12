export const ERRORS = [
    {
    id: "first name",
        msg: "Please enter first name.",
        validate(val) {
      return val.length > 2;
    },
    },
    {
        id: "last name",
        msg: "Please enter last name.",
        validate(val){
            return val.length > 3;
        }

    },
    {
        id: "email",
        msg: "Please enter your email.",
        validate(val){
            return val.includes("@");
    },
  },
  {
    id: "phone",
    msg: "Please enter a valid phone number.",
    validate(val) {
      return validator.isMobilePhone(val, "en-US");
    },
  },
];

export const hideError = (el) => {
  el.parentNode.querySelector(".error")?.classList.remove("is-error");
};

export const renderError = (el, msg) => {
  const elParent = el.parentNode;

  // Did we already render an error?
  const errorEl = elParent.querySelector(".error");

  // If so, add the class to show the error message
  if (errorEl) errorEl.classList.add("is-error");
  // Otherwise, add the error message from scratch
  else {
    const errorElement = document.createElement("p");
    errorElement.className = "error is-error";
    errorElement.textContent = msg;
    elParent.appendChild(errorElement);
  }
};

import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");

let localObject = { email: ' ', message: ' ' }

feedbackForm.addEventListener("submit", submitForm);

function submitForm(evt) {
  evt.preventDefault();
  evt.target.reset();
  console.log(localObject);
  localObject = {email: '', message: ''}
  localStorage.removeItem("feedback-form-state");
}

feedbackForm.addEventListener("input", throttle(addLocalStorage, 500));

function addLocalStorage(evt) {
   localObject[evt.target.name] = evt.target.value;
   localStorage.setItem("feedback-form-state", JSON.stringify(localObject));
} 

const data = localStorage.getItem("feedback-form-state");

function insertLocalStorage (object) {
  if (object && emailInput.name === "email") {
    emailInput.value = JSON.parse(object).email;
    localObject.email = JSON.parse(object).email
  }
  if (object && messageInput.name === "message") {
    messageInput.value = JSON.parse(object).message;
    localObject.message = JSON.parse(object).message
  }
}
insertLocalStorage (data); 
import {textToCode} from "./index.js";

const textInput = document.querySelectorAll(".card__input")[0];
console.log(textInput);
const submitButton = document.querySelectorAll(".card__submit")[0];
console.log(submitButton);
const codeOutput = document.querySelector(".card__output");
console.log(codeOutput);

let inText = "";
let outText = "";

submitButton.addEventListener("click", (event) => {
  event.preventDefault;
  inText = textInput.value;
  console.log(inText);
  outText = textToCode (inText);
  console.log(outText);
  codeOutput.innerHTML=outText;
});
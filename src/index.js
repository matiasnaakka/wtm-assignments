/* import { Sortable } from "@shopify/draggable";

const sortable = new Sortable(document.querySelectorAll("ul"), {
  draggable: "li",
});

const sortableUrl = document.querySelector("ul");

let counter = 0;
const timer = setInterval(() => {
  counter++;
  console.log(`2 sekunttia mennyt ${counter++} kerran`);
  if (counter > 10) {
    clearInterval(timer);
  }
}, 2000);

clearInterval(timer);
console.log("Suoritus jatkuu");

const divs = document.querySelectorAll("div");
console.log(divs);

divs[0].addEventListener("click", () => {
  console.log("ekaa klikattu");
});

divs[1].addEventListener("click", () => {
  console.log("tokaa klikattu");
});

divs[2].addEventListener("click", (event) => {
  console.log;
  console.log("kolmas klikattu", event);
});

divs[0].addEventListener("mouseenter", (event) => {
  console.log("mouseenter", event);
  divs[1].style.borderColor = "red";
});

divs[0].addEventListener("mouseleave", (event) => {
  console.log("mouseleave", event);
  divs[1].style.borderColor = "black";
});

document.addEventListener("keypress", (event) => {
  console.log(event.key);
  divs[2].click();

  let inputField = document.querySelector("input");
  inputField.addEventListener("focusout", (event) => {
    console.log("input event", event);
    if (inputField.value === "matias") {
      inputField.focus();
    }
  });
});
 */

const scoopy = document.createElement("img");
scoopy.src = "./assets/gifs/scoopy.gif";
scoopy.style.width = "200px";

document.body.append(scoopy);

const cheatcodeInput = document.querySelector("#cheatcode");

const cheatCode = [];
document.addEventListener("keydown", (e) => {
  cheatCode.push(e.key);
  console.log("keydown");
});

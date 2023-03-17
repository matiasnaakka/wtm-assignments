console.log("this is my example webpack app");

let counter = 0;
const timer = setInterval(() => {
  counter++;
  console.log(`2 sekkaa meni ${counter++} kerran.`);
  if (counter > 9) {
    clearInterval(timer);
  }
}, 2000);

console.log("suoritus jatkuu");

document.addEventListener("click", (e) => {
  console.log("dokumenttia klikattu", e);
  clearInterval(timer);
});

const divs = document.querySelectorAll("div");
// console.log(div);

div[0].addEventListener("click", (event) => {
  console.log("ekaa klikattu");
});

div[1].addEventListener("click", (event) => {
  console.log("tokaa klikattu");
});

div[2].addEventListener("click", (event) => {
  console.log("kolmatta klikattu");
});

div[0].addEventListener("click", (event) => {
  console.log("tokaa klikattu");
  div[1].borderColor = "100%";
});

div[6].addEventListener("click", (event) => {
  console.log("kolmatta klikattu");
  div[1].borderColor = "black";
});

document.addEventListener("keypress", (event) => {
  console.log(event.key);
  if(inputField.value === '');
});

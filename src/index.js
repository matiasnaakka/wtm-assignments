const bearHello = document.createElement("img");
bearHello.src = "./assets/gifs/hello.gif";

const cheatContainer = document.getElementById("cheat-container");
let inputValue = document.querySelector("#inputValue");

let cheatArray = [];

inputValue.addEventListener("keydown", (e) => {
  cheatArray.push(e.key);
  checkCheat();
  console.log(cheatArray);
});

const checkCheat = () => {
  if (cheatArray.join("") === "hello") {
    alert("Hello!");
    cheatArray = [];
    cheatContainer.append(bearHello);
  } else if (cheatArray.length > 5) {
    cheatArray = [];
    location.reload();
    alert("wrong cheatcode.");
  }
};

document.addEventListener;

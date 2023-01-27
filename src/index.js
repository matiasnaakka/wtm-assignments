const bearHello = document.createElement("img");
bearHello.src = "./assets/gifs/hello.gif";

const cheatContainer = document.getElementById("cheat-container");
let inputValue = document.querySelector("#inputValue");
let coordinatesCntner = document.querySelector("#coordinates");
let coordinates = document.createElement("p");
let notifierContainer = document.querySelector("#notifier");
let notifierText = document.createElement("p");

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

//double click
document.addEventListener("dblclick", (e) => {
  console.log(e);
  coordinatesCntner.append(coordinates);
  coordinates.textContent = `you just clicked on these coordinates:  X ${e.screenX.toString()} and Y ${e.screenY.toString()}`;
});

//text hover
cheatContainer.addEventListener("mouseenter", (e) => {
  cheatContainer.style.color = "green";
});
cheatContainer.addEventListener("mouseleave", (e) => {
  cheatContainer.style.color = "black";
});

let notifier = 0;
const timer = setTimeout(() => {
  notifierContainer.append(notifierText);
  notifierText.textContent = `Hurry up you have been here browsing for 15 seconds already!!!!`;
}, 15000);

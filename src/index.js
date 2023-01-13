let language = "fi";
let sorting = "";

const enhMenuBtn = document.querySelector("#englishMenuBtn");
const fiMenuBtn = document.querySelector("#finnishMenuBtn");
const alphapeticalBtn = document.querySelector("#alphapeticalBtn");
const randomDishBtn = document.querySelector("#randomDishBtn");

const cources = {
  en: [
    "Hamburger, cream sauce and poiled potates",
    "Goan style fish curry and whole grain rice",
    "Vegan Chili sin carne and whole grain rice",
    "Broccoli puree soup, side salad with two napas",
    "Lunch baguette with BBQ-turkey filling",
    "Cheese / Chicken / Vege / Halloum burger and french fries",
  ],
  fi: [
    "Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
    "Goalaista kalacurrya ja täysjyväriisiä",
    "vegaani Chili sin carne ja täysjyväriisi",
    "Parsakeittoa,lisäkesalaatti kahdella napaksella",
    "Lunch baguette with BBQ-turkey filling",
    "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset",
  ],
};

const renderMenu = () => {
  let courcesAsHtml = cources[language].map((menu) => `<p>${menu}</p>`);
  if (sorting === "asc") {
    courcesAsHtml = courcesAsHtml.sort();
  } else if (sorting === "desc") {
    courcesAsHtml = courcesAsHtml.sort().reverse();
  }
  Array.from(document.querySelectorAll(".dish")).forEach(
    (dish) => (dish.innerHTML = courcesAsHtml.join(""))
  );
};

renderMenu();

const englishMenu = () => {
  language = "en";
  renderMenu();
};

const finnishMenu = () => {
  language = "fi";
  renderMenu();
};

const sortMenu = () => {
  sorting = sorting === "asc" ? "desc" : "asc";
  renderMenu();
};

const getRandomDish = () => {
  let randomDish = Math.floor(Math.random() * cources[language].length);
  alert(cources[language][randomDish]);
  console.log(cources[language][randomDish]);
};

enhMenuBtn.addEventListener("click", englishMenu);
fiMenuBtn.addEventListener("click", finnishMenu);
alphapeticalBtn.addEventListener("click", sortMenu);
randomDishBtn.addEventListener("click", getRandomDish);

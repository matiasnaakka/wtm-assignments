const menu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

let mealInput = document.querySelector('#text-input').value;
let btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
  let validated = validateMealTitle(mealInput);
  if (!validated === true) {
    console.log('Wrong type of meal name');
  } else {
    console.log('Right type of meal name');
  }
});

//1. Create a function that validates a name for a meal
function validateMealTitle(title) {
  const pattern = /^[A-Z][a-zA-Z0-9\s\-\/\,\(\)]{4,64}$/;
  return pattern.test(title);
}

//2. Sort the menu based on price
const sortMenuByPrice = (menu) => {
  return menu.sort((a, b) => a.price - b.price);
};

//4. Raise all prices 15 % (use map)
const raisePrices = (menu) => {
  return menu.map((meal) => {
    return {
      name: meal.name,
      price: meal.price * 1.15
    };
  });
};

//5.How much does it cost to eat the whole menu (use reduce)
const totalCost = (menu) => {
  return menu.reduce((acc, meal) => acc + meal.price, 0);
};


//3.Display only items costing less than 5 € (filtering)
const filterMealsByPrice = (menu) => {
  return menu.filter((meal) => meal.price < 5);
};

console.log('total cost', totalCost(menu));
console.log('items less tha 5 €', filterMealsByPrice(menu));
console.log('items prices raised 15%', raisePrices(menu));
console.log('menu items sorted by price', sortMenuByPrice(menu));



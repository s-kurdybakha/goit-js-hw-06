const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientList = document.querySelector('#ingredients');

for (const el of ingredients) {
  const ingredientEL = document.createElement('li');
  ingredientEL.classList.add('item');
  ingredientEL.textContent = el;
  ingredientList.append(ingredientEL);

}

console.log(ingredientList);

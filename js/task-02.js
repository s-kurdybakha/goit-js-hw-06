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
 
  ingredientEL.setAttribute('class', 'item');
  ingredientEL.textContent = el;
  ingredientList.append(ingredientEL);
}

console.log(ingredientList);

// for (const el of ingredients) {
//   const ingredientEL = document.createElement('li');
 
//   ingredientEL.classList.add('item');
//   ingredientEL.textContent = el;
//   ingredientList.append(ingredientEL);
// }



// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// Завдання 3
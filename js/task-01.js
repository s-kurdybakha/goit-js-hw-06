const categoriesEl = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesEl.length);


console.log("Category:", categoriesEl[0].firstElementChild.textContent);
console.log("Elements:", categoriesEl[0].lastElementChild.children.length);
console.log("Category:", categoriesEl[1].firstElementChild.textContent);
console.log("Elements:", categoriesEl[1].lastElementChild.children.length);
console.log("Category:", categoriesEl[2].firstElementChild.textContent);
console.log("Elements:", categoriesEl[2].lastElementChild.children.length);
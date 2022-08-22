

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const changeCounterNumberValue = document.querySelector('#value');


decrementBtn.addEventListener('click', () => {
    counterValue --
    changeCounterNumberValue.textContent = counterValue

});

incrementBtn.addEventListener('click', () => {
    counterValue ++
    changeCounterNumberValue.textContent = counterValue

});






const fontSizeControl = document.querySelector('#font-size-control');
const currentText = document.querySelector('#text');

currentText.setAttribute('style', `${fontSizeControl.value}px`);

fontSizeControl.addEventListener('input', onInputControl);

text.style.fontSize = '56px';

function onInputControl() {
    currentText.style.fontSize = `${fontSizeControl.value}px`;
}


// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


// const controlInput = document.querySelector('#font-size-control');
// const currentText = document.querySelector('#text');



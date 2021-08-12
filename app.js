// import functions and grab DOM elements

// initialize state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
import { add, multiplyNumber } from './utilis.js';
import { subtractNumber } from './utilis.js';
import { divideNumber } from './utilis.js';

const numOne = document.getElementById('num1');
const numTwo = document.getElementById('num2');
const addButton = document.getElementById('addButton');
const finalResult = document.getElementById('result');


addButton.addEventListener('click', () => {
  const x = Number(numOne.value);
  const y = Number(numTwo.value);
  const result = add(x, y);
  finalResult.textContent = result;

});

const subtractOne = document.getElementById('subOne');
const subtractTwo = document.getElementById('subTwo');
const subtractButton = document.getElementById('subButton');
const subtractResult = document.getElementById('subResult');

subtractButton.addEventListener('click', () => {
  const a = Number(subtractOne.value);
  const b = Number(subtractTwo.value);
  const result = subtractNumber(a, b);
  subtractResult.textContent = result;
});

const multiplyOne = document.getElementById('mulOne');
const multiplyTwo = document.getElementById('mulTwo');
const multiplyButton = document.getElementById('mulButton');
const multiplyResult = document.getElementById('mulResult');

multiplyButton.addEventListener('click', () => {
  const d = Number(multiplyOne.value);
  const e = Number(multiplyTwo.value);
  const result = multiplyNumber(d, e);
  multiplyResult.textContent = result;
});

const divideOne = document.getElementById('divOne');
const divideTwo = document.getElementById('divTwo');
const divideButton = document.getElementById('divButton');
const divideResult = document.getElementById('divResult');

divideButton.addEventListener('click', () => {
  const f = Number(divideOne.value);
  const g = Number(divideTwo.value);
  const result = divideNumber(f, g);
  divideResult.textContent = result;
});

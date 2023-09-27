console.clear();

const operand1 = 12;
const operand2 = 4;
let erg;
/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  const ergAdd = operand1 + operand2;
  console.log("ergAdd", ergAdd);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  const ergSub = operand1 - operand2;
  console.log("ergSub", ergSub);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  const ergMultiply = operand1 - operand2;
  console.log("ergMultiply", ergMultiply);
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  const ergDivide = operand1 / operand2;
  console.log("ergDivide", ergDivide);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  const ergRaise = operand1 ** operand2;
  console.log("ergRaise", ergRaise);
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  const ergRemainder = operand1 % operand2;
  console.log("ergRemainder", ergRemainder);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

let ergAddAlways1 = operand1;
let ergAddAlways5 = operand1;
let ergSubAlways1 = operand1;
let ergSubAlways5 = operand1;
let ergRaiseAlwasys = operand1;
let ergDivideAlways = operand1;

increaseByOneButton.addEventListener("click", () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.

  ergAddAlways1++;
  console.log("ergAddAlways1", ergAddAlways1);
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.

  ergAddAlways5 = ergAddAlways5 + 5;
  console.log("ergAddAlways5", ergAddAlways5);
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.

  ergSubAlways1--;
  console.log("ergSubAlways1", ergSubAlways1);
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.

  ergSubAlways5 = ergSubAlways5 + 5;
  console.log("ergSubAlways5", ergSubAlways5);
});

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console. });
  ergRaiseAlwasys = ergRaiseAlwasys ** operand2;
  console.log("ergRaiseAlwasys", ergRaiseAlwasys);
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
  ergDivideAlways = ergDivideAlways / operand2;
  console.log("ergDivideAlways", ergDivideAlways);
});

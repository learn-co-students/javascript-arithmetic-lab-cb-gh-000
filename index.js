const add = (a, b) => {
  return a + b;
};  

const subtract = (a, b) => {
  return a - b;
};  

const multiply = (a, b) => {
  return a * b;
};  

const divide = (a, b) => {
  return a / b;
};  

const inc = (n) => ++n;
const dec = (n) => --n;

const makeInt = (n) => { return parseInt(n, 10); };
const preserveDecimal = (n) => { return parseFloat(n); }
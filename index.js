function add(a, b) {
  var sum = a + b ;
  return sum;
}

function subtract(a, b) {
  var diff = a + (-b);
  return diff;
}

function multiply(a, b) {
  var prod = a * b ;
  return prod;
}

function divide(a, b) {
  var quot = a / b ;
  return quot;
}

function inc(n) {
  var res = n;
  return ++res;
}

function dec(n) {
  var res = n;
  return --res;
}

function makeInt(n) {
  var res = n;
  return parseInt(res);
}

function makeInt(n) {
  var res = n;
  return parseInt(res, 10);
}

function preserveDecimal(n) {
  var res = n;
  return parseFloat(res);
}

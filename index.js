function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  return ++n;
}

function dec(n) {
  return --n;
}

function makeInt(n) {
  const base = 10;
  var value = parseInt(n, base);

  return value;
}

function preserveDecimal(n) {
  return parseFloat(n);
}

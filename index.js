
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
  n = parseInt(n, 10);
  return n;
}

function preserveDecimal(n) {
  var tail = n.length;
  n = parseFloat(n);
  if (typeof n !== 'number') {
    return n;
  } else {
    return n;
  }
}
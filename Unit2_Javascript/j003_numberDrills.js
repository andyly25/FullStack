// https://gist.github.com/thinkfulgist/98011676840718646a5829d497f6500e
// compute area drill
function computeArea(width, height) {
  // your code here
  return width * height;
}

// Tests
function testComputeArea() {
  let width = 3;
  let height = 4;
  let expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  } else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

testComputeArea();

// is divisible drill
function isDivisible(divisee, divisor) {
  // your code here
  return divisee % divisor === 0;
}

// tests

function testIsDivisible() {
  if (isDivisible(10, 2) && !isDivisible(11, 2)) {
    console.log('SUCCESS: `isDivisible` is working');
  } else {
    console.log('FAILURE: `isDivisible` is not working');
  }
}

testIsDivisible();

// temp conversion
function celsToFahr(celsTemp) {
  // your code here
  return celsTemp * (9/5) + 32;
}

function fahrToCels(fahrTemp) {
  // your code here
  return (fahrTemp - 32) * (5/9)
}

// tests

function testConversion(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` is working');
    return true;
  } else {
    console.log('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function testConverters() {
  let cel2FahrInput = 100;
  let cel2FahrExpect = 212;
  let fahr2CelInput = 32;
  let fahr2CelExpect = 0;

  if (
    testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
    testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)
  ) {
    console.log('SUCCESS: All tests passing');
  } else {
    console.log('FAILURE: Some tests are failing');
  }
}

testConverters();

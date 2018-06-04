// https://gist.github.com/thinkfulgist/2cc8b6ed4f6d90fb5ba4d4d86f86e475
// NOTE: comment out functions as needed
function firstFourItems (array) {
  // your code goes here
  return array.slice(0, 4);
}

function lastThreeItems (array) {
  // your code goes here
  return array.slice(-3);
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function runTests() {
  const list = ['red bull', 'monster', 'amp', 'rockstar', 'full throttle'];
  const result1 = ['red bull', 'monster', 'amp', 'rockstar'];
  const result2 = ['amp', 'rockstar', 'full throttle'];

  const testResults = [
    testFunctionWorks(firstFourItems, list, result1),
    testFunctionWorks(lastThreeItems, list, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

// https://gist.github.com/thinkfulgist/2cc8b6ed4f6d90fb5ba4d4d86f86e475
function minusLastItem (array) {
  // your code goes here
  return array.slice(0, -1);
}

function copyFirstHalf (array) {
  // your code goes here
  /* I wanted to do integer division so things like 7/2 = 3
  https://stackoverflow.com/questions/7641818/how-can-i-remove-the-decimal-part-from-javascript-number

  if I wanted to do the suggestion above of odd and even I would get % 2
  and see if it's 1 or 0, if 1 it's odd, subtract 1 from length
  then divide by 2 and use slice, otherwise it's even and just divide by 2.
  */
  const halfArrayLength = Math.trunc(array.length / 2);
  return array.slice(0, halfArrayLength);
  // I overthunk it and solution was just 
  // return array.slice(0, array.length / 2);
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function runTests() {
  const list = [
    'red bull',
    'monster',
    'amp',
    'rockstar',
    'full throttle',
    'kickstart',
  ];
  const result1 = ['red bull', 'monster', 'amp', 'rockstar', 'full throttle'];
  const result2 = ['red bull', 'monster', 'amp'];
  const list2 = ['lions', 'tigers', 'bears'];
  const result3 = ['lions'];
  
  const testResults = [
    testFunctionWorks(minusLastItem, list, result1),
    testFunctionWorks(copyFirstHalf, list, result2),
    testFunctionWorks(copyFirstHalf, list2, result3)
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

// https://gist.github.com/thinkfulgist/2cc8b6ed4f6d90fb5ba4d4d86f86e475
function squares (array) {
  // your code here
  const squaredArray = array.map(num => num ** 2);
  return squaredArray;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function runTests() {
  const input1 = [1, 2, 3, 4, 5];
  const result1 = [1, 4, 9, 16, 25];
  const input2 = [2, 4, 6, 8];
  const result2 = [4, 16, 36, 64];

  const testResults = [
    testFunctionWorks(squares, input1, result1),
    testFunctionWorks(squares, input2, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

// https://gist.github.com/thinkfulgist/2cc8b6ed4f6d90fb5ba4d4d86f86e475
function greatestToLeast(array) {
  // your code goes here
  // Still not used to arrow functions
  return array.sort((a, b) => b - a);
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item, index) {
      return index === 0 || result[index] < result[index - 1];
    }) &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function runTests() {
  const input1 = [10, 3, 5, 22, 19];
  const result1 = [22, 19, 10, 5, 3];
  const input2 = [2, 4, 6, 8];
  const result2 = [8, 6, 4, 2];

  const testResults = [
    testFunctionWorks(greatestToLeast, input1, result1),
    testFunctionWorks(greatestToLeast, input2, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

// https://gist.github.com/thinkfulgist/2cc8b6ed4f6d90fb5ba4d4d86f86e475
function shortWords (array) {
  // your code goes here
  return array.filter(array => array.length < 5);
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  const result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function runTests() {
  const input1 = ['cat', 'oblivion', 'dog', 'patriarchy', 'blue', 'house'];
  const result1 = ['cat', 'dog', 'blue'];
  const input2 = ['rainbow', 'the', 'big', 'broom'];
  const result2 = ['the', 'big'];

  const testResults = [
    testFunctionWorks(shortWords, input1, result1),
    testFunctionWorks(shortWords, input2, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

// https://gist.github.com/thinkfulgist/2cc8b6ed4f6d90fb5ba4d4d86f86e475
function divisibleBy5 (array) {
  // your code here
  return array.find(element => element % 5 === 0);
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  } else {
    console.error(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function runTests() {
  const input1 = [13, 22, 4, 47, 15, 35, 82];
  const result1 = 15;
  const input2 = [25, 20, 15, 10, 5];
  const result2 = 25;

  const testResults = [
    testFunctionWorks(divisibleBy5, input1, result1),
    testFunctionWorks(divisibleBy5, input2, result2),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

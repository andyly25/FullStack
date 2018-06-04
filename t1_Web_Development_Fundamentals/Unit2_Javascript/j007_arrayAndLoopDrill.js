/*
  https://repl.it/@andyjly/Andy-min-and-max-without-sort-drill
  https://repl.it/@andyjly/Andy-average-drill
  https://repl.it/@andyjly/Andy-fizzbuzz-drill-js
  https://gist.github.com/thinkfulgist/05cb85625896abdcde3b190310a4e17c
 */

function max(numbers) {
  // your code here
  let maxNum = numbers[0];
  if (maxNum === null) {
    return maxNum;
  }
  // eslint doesn't like i++?
  for(let i = 0; i < numbers.length; i += 1) {
    if(maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

function min(numbers) {
  // your code here
  let minNum = numbers[0];
  if (minNum === null) {
    return minNum;
  }
  for(let i = 0; i < numbers.length; i += 1) {
    if(minNum > numbers[i]) {
      minNum = numbers[i];
    }
  }
  return minNum;
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
    console.log(
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

function testEmpty(fn) {
  if (fn([]) === null || fn([]) == undefined) {
    console.log(`SUCCESS: ${fn.name} works on empty arrays`);
    return true;
  } else {
    console.log(
      `FAILURE: ${fn.name} should return undefined or null for empty arrays`
    );
    return false;
  }
}

(function runTests() {
  // we'll use the variables in our test cases
  const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  const realMin1 = numList1[3];
  const realMax1 = numList1[6];
  const numList2 = [0, 1, 2, 3, 4];
  const realMin2 = numList2[0];
  const realMax2 = numList2[4];

  const testResults = [
    testFunctionWorks(max, numList1, realMax1),
    testFunctionWorks(max, numList2, realMax2),
    testFunctionWorks(min, numList1, realMin1),
    testFunctionWorks(min, numList2, realMin2),
    testEmpty(max),
    testEmpty(min),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();

// Helper function
function sum (total, num) {
  return total + num;
}

// I want to try using reduce
function average (numbers) {
  // your code goes here
  const arrayLength = numbers.length;
  return numbers.reduce(sum) / arrayLength;
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
    console.log(
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

(function runTests() {
  const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const correctAns1 = 5.5;
  const numList2 = [0, -1, 1];
  const correctAns2 = 0;

  const testResults = [
    testFunctionWorks(average, numList1, correctAns1),
    testFunctionWorks(average, numList2, correctAns2),
  ];
  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();

function fizzBuzz (countTo) {
  // your code here
  // How to make better? I can think of switch statements
  const fizzbuzzSequence = [];
  for(let i = 1; i <= countTo; i += 1) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
      fizzbuzzSequence.push('fizzbuzz');
    } else if (i % 3 === 0) {
      fizzbuzzSequence.push('fizz');
    } else if (i % 5 === 0) {
      fizzbuzzSequence.push('buzz');
    } else {
      fizzbuzzSequence.push(i);
    }
  }
  return fizzbuzzSequence;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  const countTo = 16;
  const expected = [
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzbuzz',
    16,
  ];

  const actual = fizzBuzz(countTo) || [];

  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;
    })
  ) {
    console.log('SUCCESS: fizzBuzz is working');
  } else {
    console.log('FAILURE: fizzBuzz is not working');
  }
})();

function sum (total, num) {
  return total + num;
}

// I want to try using reduce
function average (numbers) {
  // // your code goes here
  // // I'll assume array is not empty
  const arrayLength = numbers.length;
  // let totalSum = 0;
  // // eslint does not like i++ ?
  // for(let i = 0; i < arrayLength; i += 1) {
  //   totalSum += numbers[i];
  // }
  return numbers.reduce(sum) / arrayLength;
}


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
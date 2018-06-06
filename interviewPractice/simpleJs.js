// declare a variable whose value can be reassigned
let someNum = 0;
console.log(someNum);
someNum += 1;
console.log(someNum);

/* Define a function called “print” that takes one argument
 * — toPrint — and logs toPrint to the console. Now, invoke that function.
 */
function print (toPrint) {
  console.log(toPrint);
}

print('Hello Interview');

// Write a function that accepts an array of test scores as an
// agrument. The function should return the number of test scores that
// were an 80 or higher.
const array = [23, 91, 42, 80, 100];
function passingGrade (arr) {
  return arr.filter(x => x >= 80);
}

function passingGrade2 (arr) {
  let solution = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= 80) {
      solution.push(array[i]);
    }
  }
  return solution;
}

console.log(passingGrade(array));
console.log(passingGrade2(array));

/*
Write a function called `makeOrder`. It should take a table number,
an array of order items, and an order status as arguments.
It should return an object with the keys `tableNumber`,
`order`, and `status` and their associated values.
*/
function makeOrder (tableNum, orders, orderStatus) {
  return { tableNum, orders, orderStatus };
}
console.log(makeOrder(5, ['fries', 'burgers', 'coke'], 'ready'));

// function some Click Event
function userClick () {
  $('#submitButton').on('click', 'button', function (event) {
    $("h1").append('HELLO WORLD!');
  });
}

// Data merge
// In this drill, you'll write a function called mergeDataStreams that merges
// together data from two sources. The first data set is an array of objects
// which looks like this:
const array1 = [{
  id: 'aBcDeFgH',
  firstName: 'Juan',
  lastName: 'Doe',
  age: 32
},
{
  id: 'zYxWvUt',
  firstName: 'Alex',
  lastName: 'Smith',
  age: 24
}];

const array2 = [{
  id: 'aBcDeFgH',
  occupation: 'architect',
  address: {
    street: '123 Main St',
    city: 'CityTown',
    Country: 'USA'
  }
},
{
  id: 'zYxWvUt',
  occupation: 'receptionist',
  address: {
    street: '555 Ocean Ave',
    city: 'Beach City',
    Country: 'USA'
  }
}];

function mergeDataStreams (a1, a2) {
  for (let i = 0; i < array1.length; i += 1) {
    if (a1[i].id === a2[i].id) {
      Object.assign(a1[i], a2[i]);
    }
  }
}

mergeDataStreams(array1, array2);
console.log(array1);

// function mergeDataStreams2 (array1, array2) {
//   let someArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array1[i].id === array2[i].id) {
//       someArray.push({ ...array1, location: array2});
//     }
//   }
//   return someArray;
// }
// const newArray = mergeDataStreams2(array1, array2);
// console.log(newArray);

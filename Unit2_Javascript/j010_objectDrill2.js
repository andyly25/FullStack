/*
https://gist.github.com/thinkfulgist/2652b591ee29081a778aa7fd440bfa95

https://repl.it/@andyjly/Andy-Make-student-reports-drill
https://repl.it/@andyjly/Andy-Enroll-in-summer-school-drill
https://repl.it/@andyjly/Andy-find-by-id-drill
https://repl.it/@andyjly/Andy-validate-object-keys-drill
 */

function makeStudentsReport (data) {
  // your code here
  return data.map(student => `${student.name}: ${student.grade}`);
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   Nothing to see here!
   
*/

// tests

function testIt() {
  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

  const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];

  const results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `makeStudentsReport` must return an array');
    return;
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' +
        testData.length +
        ' but `makeStudentsReport` returned array of length ' +
        results.length
    );
    return;
  }
  for (let i = 0; i < expectations.length; i++) {
    let expect = expectations[i];
    if (
      !results.find(function(item) {
        return item === expect;
      })
    ) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' + 'producing expected strings'
      );
      return;
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();

// ----------------------------
const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  // your code here
  // confused over this https://eslint.org/docs/rules/arrow-body-style
  // figured it out, () surrounding after => and doesn't need return statement.
  return students.map(student => ({
    name: student.name,
    status: 'In Summer School',
    course: student.course
  }));
}

/* From here down, you are not expected to understand.... for now :)
  Nothing to see here!
*/

// tests

function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology',
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics',
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science',
    },
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return;
  }
  var result = testData.every(function(student) {
    var match = results.find(function(_student) {
      return (
        _student.name === student.name &&
        _student.course === student.course &&
        _student.status.toLowerCase() === 'in summer school'
      );
    });
    return match !== undefined;
  });
  if (!result) {
    console.error(
      'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school": ' +
        JSON.stringify(results)
    );
  } else {
    console.info('SUCCESS: `enrollSummerSchool` is working');
  }
}

testIt();


// ----------------------------
// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  // your code here
  return items.find(item => item.id === idNum)
}

//

function testIt() {
  const testData = [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'bizz' },
    { id: 3, bang: 'boo' },
  ];
  const result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return;
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' + result.id
    );
    return;
  }
  if (result.bang !== 'boo') {
    console.error(
      'Expected all key/value pairs from target object to be returned'
    );
    return;
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();




// ----------------------------
// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys (object, expectedKeys) {
  // your code here
  // accounting for length https://stackoverflow.com/questions/5223/length-of-a-javascript-object
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  // Check to see if key is contained within object
  // https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
  for (let i = 0; i < expectedKeys.length; i = i + 1) {
    if (!object.hasOwnProperty(expectedKeys[i])) {
      return false;
    }
  }
  return true;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

function testIt() {
  const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };

  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };

  const objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused',
  };

  const objectD = {
    foo: 2,
    bar: 'Jane Doe',
    bizz: 34,
    bang: 'Chicago',
  };

  const expectedKeys = ['id', 'name', 'age', 'city'];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error('FAILURE: validateKeys should return a boolean value');
    return;
  }

  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return true but returned false:
      Object: ${JSON.stringify(objectA)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return false but returned true:
      Object: ${JSON.stringify(objectB)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  if (validateKeys(objectC, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return false but returned true:
      Object: ${JSON.stringify(objectC)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  if (validateKeys(objectD, expectedKeys)) {
    console.error(
      `FAILURE: running validateKeys with the following object and keys
      should return false but returned true:
      Object: ${JSON.stringify(objectD)}
      Expected keys: ${expectedKeys}`
    );
    return;
  }

  console.log('SUCCESS: validateKeys is working');
}

testIt();
/*
 * Write a function that takes an integer value and checks to see if it
 * is even or odd using the bit-wise AND operator. Hint: Think about
 * what the value of the least-significant bit will be for even and odd numbers.
 */

/*
Why would using bit-wise operations be potentially faster for
checking whether a number is even or odds as opposed to using
something like the modulo operator (for example randInt % 2)?

it would become much faster for very large inputs(iterations)
 */

function evensAndOp (num) {
    console.log('using AND, is it even? ', num, num & 1);
}

// evensAndOp(3);
// evensAndOp(4);
// evensAndOp(5);
// evensAndOp(66);

/*
 * Write a function that takes in two integer values and prints out the
 * resultant value when you AND the two input values and then
 * also when you OR the two input values.
 */
function andOr (num1, num2) {
    const resultAND = num1 & num2;
    const resultOR = num1 | num2;
    console.log(`AND result is: ${resultAND}, and OR result is: ${resultOR}`);
}

// andOr(25, 25);
// andOr(25, 26);
// andOr(25, -25);
// andOr(1, 0);
// andOr(0, 0);

/*
 * Extend the previous function further by adding logic for the XOR operation
 * when two integer values are input. Add a third parameter which denotes
 * which type of operation to execute. Print out the resultant value for
 * the associated operation type.
 */
function andOrXor (num1, num2, op) {
    switch (op) {
        case 'andOp':
            console.log(`AND op of ${num1} and ${num2} is: ${num1 & num2}`);
            break;
        case 'orOp':
            console.log(`OR op of ${num1} and ${num2} is: ${num1 | num2}`);
            break;
        case 'xorOp':
            console.log(`XOR op of ${num1} and ${num2} is: ${num1 ^ num2}`);
            break;
        default:
            console.log(
                "two nums and an operator of 'andOp', 'orOp', or 'xorOp'"
            );
    }
}

// andOrXor(0, 1, 'andOp');
// andOrXor(0, 1, 'orOp');
// andOrXor(0, 1, 'xorOp');

/*
 * Write a function that takes in an integer value and
 * prints out its complement value.
 */
function notOp (num) {
    const result = ~num;
    // logical right shift >>>, used to convert the value to unsigned 32 bit int
    const binary = (num >>> 0).toString(2);
    const binaryNot = (result >>> 0).toString(2);
    console.log(`num entered is: ${binary}, \ncomplement is: ${binaryNot}`);
}

// notOp(9);
// notOp(1);
// notOp(16);

// * Write a function which sets the third bit of a number.
function setBit (num, pos) {
    const mask = 1 << pos;
    console.log(`${num} set bit at position: ${pos} is ${num | mask}`);
}
setBit(16, 3);

// * Write a function which toggles the third bit of a number.
function toggleBit (num, pos) {
    // this is how we get bit mask
    const mask = 1 << pos;
    console.log(`${num} toggle bit at position: ${pos} is ${num ^ mask}`);
}
toggleBit(15, 3);
// * Write a function which clears (sets to zero) the third bit of a number.
function clearBit (num, pos) {
    const mask = 1 << pos;
    // & ~mask makes it so everything else but position gives a 1 from AND
    console.log(`${num} clear bit at position: ${pos} is ${num & ~mask}`);
}
clearBit(31, 3);

// * Write a function which tells you whether the third bit of a number is set.
// check to see if bit at that position is a 1
function checkBit (num, pos) {
    const mask = 1 << pos;
    const result = num & mask;
    console.log(`${num} check bit at position: ${pos} is ${result}`);
}
checkBit(16, 3);
checkBit(8, 3);

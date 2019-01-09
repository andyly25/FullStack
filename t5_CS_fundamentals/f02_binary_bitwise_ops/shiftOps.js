/*
 * Write a function that takes in a decimal value and a value that represents
 * the number of bit positions to shift left with. Return or print out
 * the final base 10 value after the shift.
 *
 * can verify if true by either applying formula of x*2^y or convert both
 * to binary form and see if extra y zeros are at the end
 */
function shiftLeft (num, pos) {
    const result = num << pos;
    console.log(`${num} shifted left by ${pos} is: ${result}`);
}
// shiftLeft(13, 3);

function shiftRight (num, pos) {
    const result = num >> pos;
    console.log(`${num} shifted right by ${pos} is: ${result}`);
}
// shiftRight(13, 3);
// shiftRight(11, 4);
// shiftRight(-11, 4);

// If numbers are not negative, it will work exactly the same way as right shift
// this is because compared to negative numbers with changing bits to be
//  complement and adding 1 to it, positive numbers would remain the same
function zeroFillRightShift (num, pos) {
    const result = num >>> pos;
    console.log(`${num} zero fill shifted right by ${pos} is: ${result}`);
}
// zeroFillRightShift(13, 3);
// zeroFillRightShift(11, 4);
// zeroFillRightShift(-11, 4);

// Write a function which doubles an integer.
function doubleInt (num) {
    const result = num << 1;
    console.log(`${num} doubled is ${result}`);
}
doubleInt(30);

// Write a function which quadruples an integer.
function quadrupleInt (num) {
    const result = num << 2;
    console.log(`${num} quadrupled is ${result}`);
}
quadrupleInt(30);

// Write a function which divides an integer by two, rounding down.
function divideTwoInt (num) {
    const result = num >> 1;
    console.log(`${num} divide by 2 is ${result}`);
}
divideTwoInt(30);

// Write a function which calculates 2^n.
function polynomialCalc (pos) {
    const result = 1 << pos;
    console.log(`2^${pos} is ${result}.`);
}
polynomialCalc(5);

// Write a function which calculates the Morton Number from two 8-bit integers.
// In a Morton Number, the bits of two numbers are interleaved.
// So if your inputs were: 15 (00001111) and 48 (00110000),
// your output would be 1450 (0000010110101010).
function mortonNumber (numA, numB) {
    let mortons = 0;
    // numB would start first from right to left and apply to every other bit
    // num & (1<<i) checks if a 0 or 1 and the << i at end applies result at pos
    for (let i = 0; i < 8; i += 1) {
        mortons += ((numB & (1 << i)) << i);
        mortons += ((numA & (1 << i)) << (i + 1));
    }
    console.log(`morton number of
        ${numA} ${numA.toString(2)} and
        ${numB} ${numB.toString(2)} is
        ${mortons} ${mortons.toString(2)}`);
}
mortonNumber(15, 48);

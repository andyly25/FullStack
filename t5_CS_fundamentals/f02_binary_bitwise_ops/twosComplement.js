/*
 * Implement a function that takes in an integer and prints out its two's
 * complement value by following the algorithm described above.
 * Hint: to invert the bits of a number you can use the "~" operator.
 * For example ~25 will invert the bits of the integer 25.
 */

function twosComplement (num) {
    const result = ~num + 1;
    // logical right shift >>>, used to convert the value to unsigned 32 bit int
    const binary = (result >>> 0).toString(2);
    console.log('twos complement is: ', result);
    console.log(binary);
}

twosComplement(5);

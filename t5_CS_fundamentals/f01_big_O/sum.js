// this algorithm runs on O(n) time, it is classified as linear
// run time grows as a function of input size

/*
return an object with a .result property which will contain the sum, and a
.ticks property that we can use to measure the number of
operations done by our algorithm
*/
function sum (array) {
    let totalSum = 0;
    // initialize ticks at 1 so we count the one time
    // operation of initializing our sum variable
    let ticks = 1;
    // loop through for routine for input.length time
    /*
    if you need to keep looping, which is constant time.
    If the answer to that is "yes", then we access the
    element at array[i] (constant time),
    add that amount to the sum variable (constant time),
    and increment ticks by one (also constant time).
    */
    for (let i = 0; i < array.length; i += 1) {
        totalSum += array[i];
        ticks += 1;
    }
    return { result: totalSum, ticks };
}

/*
go through the loop, it will require four constant time operations
we have a linear relationship between the length of the input array,
and the number of operations required for the loop part of the
function to complete. The time complexity of the algorithm grows in direct,
linear proportion to the size of the input.
*/

function getRunTimeOperations (fn, input) {
    const { result, ticks } = fn(input);
    console.log(
        `With input of size ${input.length}, ${fn.name} ` +
            `clocked ${ticks} ticks to generate result of ${result}.`
    );
}

getRunTimeOperations(sum, [1, 2, 3]);
getRunTimeOperations(sum, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getRunTimeOperations(sum, [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100
]);

// Imagine you have an array of numbers. Write an algorithm to remove all
// numbers less than five from the array.
function removerUnder (array, minNum) {
    // simplest way is to loop through array and ignore all under 5
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] >= minNum) {
            result.push(array[i]);
        }
    }
    return result;
}
const array1 = [1, 6, 9, 5, 3, 2, 1, 10];
console.log(`remove under 5 of ${array1} is ${removerUnder(array1, 5)}`);

/*
 * Imagine you have two arrays which have already been sorted. Write an
 * algorithm to merge the two arrays into a single array, which should also be
 * sorted. For example, if your input arrays were
 * [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], your output array should be
 * [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].
 */

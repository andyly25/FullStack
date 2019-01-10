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
// const array1 = [1, 6, 9, 5, 3, 2, 1, 10];
// console.log(`remove under 5 of ${array1} is ${removerUnder(array1, 5)}`);

/*
 * Imagine you have two arrays which have already been sorted. Write an
 * algorithm to merge the two arrays into a single array, which should also be
 * sorted. For example, if your input arrays were
 * [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], your output array should be
 * [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].
 */
function mergeSortedArray (arr1, arr2) {
    // I can only think of comparing the two arrays and see which value is
    // smaller then adding into a new array with both
    // this is assuming it's already sorted
    const result = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < (arr1.length + arr2.length)) {
        // have to handle when one array is done but other still contain elements
        const isA1 = index1 >= arr1.length;
        const isA2 = index2 >= arr2.length;

        // now compare the two
        if (!isA1 && (isA2 || arr1[index1] < arr2[index2])) {
            result[current] = arr1[index1];
            index1 += 1;
        } else {
            result[current] = arr2[index2];
            index2 += 1;
        }

        current += 1;
    }
    return result;
}

// function mergeSortedArray (arr1, arr2) {
//     const result = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) {
//             result.push(arr1[i]);
//             i += 1;
//         } else {
//             result.push(arr2[j]);
//             j += 1;
//         }
//     }
//     console.log('result is', result);
//     console.log('i is', i);
//     console.log('j is', j);
//     console.log('slice 1 is', arr1.slice(i));
//     console.log('slice 2 is', arr2.slice(j));
//     // this slicing adds in the missing last number that gets cut off
//     return result.concat(arr1.slice(i)).concat(arr2.slice(j));
// }

// const arr3 = [3, 5, 6, 10, 11, 20];
// const arr4 = [1, 2, 7, 8, 15, 19];
// const arr1 = [1, 3, 6, 8, 11];
// const arr2 = [2, 3, 5, 8, 9, 10];
// console.log(`merging
//     array1: ${arr1} with
//     array2: ${arr2} becomes
//     ${mergeSortedArray(arr1, arr2)}`);
// console.log(`merging
//     array3: ${arr3} with
//     array4: ${arr4} becomes
//     ${mergeSortedArray(arr3, arr4)}`);

/*
 * Given an array of numbers, write an algorithm to find out the products
 * of every number, except the one at that index. For example,
 * if the input was [1, 3, 9, 4], the output should be
 * [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).
 */
function arrayProducts (array) {
    // products starts at 1 so we can multiply into it.
    let product = 1;
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (array[i] !== array[j]) {
                product *= array[j];
            }
        }
        result.push(product);
        product = 1;
    }
    return result;
}

// solution from interview cake
/*
 * To find the products of all the integers except the integer at each index,
 * we'll go through our array greedily twice. First we get the products of
 * all the integers before each index, and then we go backwards to get the
 * products of all the integers after each index.

 * When we multiply all the products before and after each index, we get our
 * answer—the products of all the integers except the integer at each index!
 *
 * O(n) time and O(n) space. We make two passes through our input an array,
 * and the array we build always has the same length as the input array.
 */
function getProductsOfAllIntsExceptIndex (arr) {
    if (arr.length < 2) {
        throw new Error('Getting prod of nums at other indices req at least 2 nums');
    }
    const productOfAllIntsExceptAtIndex = [];

    // for each int, find prod of all ints
    // before it, storing the total prod so far each time
    let prodSoFar = 1;
    for (let i = 0; i < arr.length; i += 1) {
        productOfAllIntsExceptAtIndex[i] = prodSoFar;
        prodSoFar *= arr[i];
    }

    // for each in, we find prod of all ints
    // after it, since each index in product all has prod of all ints be4 it
    // now we're starting the total prod of all other ints
    prodSoFar = 1;
    for (let j = arr.length - 1; j >= 0; j -= 1) {
        productOfAllIntsExceptAtIndex[j] *= prodSoFar;
        prodSoFar *= arr[j];
    }
    return productOfAllIntsExceptAtIndex;
}

const apArray = [1, 3, 9, 4];
console.log(`inefficient O(n^2) with
    array ${apArray} and results being
    ${arrayProducts(apArray)}`);
console.log(`more efficient O(n) with
    array ${apArray} and results being
    ${getProductsOfAllIntsExceptIndex(apArray)}`);

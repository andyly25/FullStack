// NOTE: uncomment any of the console logs for what you want to test

// wanted a way to get python's range
// https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
const range = (start, end) => (
    Array.from({ length: end - start }, (v, k) => k + start)
);

const array1 = [1, 2, 3];
const array2 = range(1, 11);
// console.log(array2);
const array3 = range(1, 101);
// console.log(array3);
const array4 = range(1, 1001);

/*
 * Constant time O(1)
 * no matter size of input, takes same amount of time to complete
 * e.g. access array item, perform basic arithmetic operations
 */
function getRandomItem (array) {
    let sum = 0;
    let ticks = 0;
    // get random num and access element in array
    const item = array[Math.floor(Math.random() * array.length)];
    ticks += 1;

    return {
        result: item,
        ticks
    };
}

function getRunTimeOperations (fn, input) {
    const { ticks, result } = fn(input);
    console.log(
        `With input of size ${input.length}, ${fn.name} ` +
            `clocked ${ticks} ticks to generate result of ${result}.`
    );
}

// getRunTimeOperations(getRandomItem, array1);
// getRunTimeOperations(getRandomItem, array2);
// getRunTimeOperations(getRandomItem, array3);

/*
 * Logarithmic time O(log(n))
 * is next best thing after constant time
 * can take longer with larger inputs, run time increases slowly
 * e.g. 1 sec to complete size 10, 2 for 100, 3 for 1000
 * sample function below
 * It takes a sorted array of integers (arr) and a less than value (n) as
 * arguments, and returns the number of elements from the array
 * whose value is less than n
 */
function howManyLessThanNitems (arr, n) {
    let ticks = 0;
    //  if 1st ele in arr is greater than 'n' returns 0,
    // because no items in arr is less than 'n'
    if (!arr.length || arr[0] >= n) {
        return 0;
    }

    let lowIndex = 0;
    let highIndex = arr.length;
    while (highIndex > lowIndex) {
        // find midpoint
        const midIndex = Math.floor((highIndex + lowIndex) / 2);
        ticks += 1;
        // if `midIndex` element is greater than `n`, that means all elements
        // to the right of `midIndex` are also greater than `n`, so
        // we only need to focus on elements to the left of `midIndex`.
        // We set `highIndex` to the currrent value of `midIndex` so next time
        // through the loop, we'll only look at the left half.
        if (arr[midIndex] >= n) {
            highIndex = midIndex;
            ticks += 1;
        }

        // if element to the right of `midIndex` is less than `n`, then we
        // know that we need to check the items to the right of `midIndex`, so
        // we set `lowIndex` to the current value of `midIndex`, so that next
        // time through the loop we only look at the right side.
        else if (arr[midIndex + 1] < n) {
            lowIndex = midIndex;
            ticks += 1;
        }

        // otherwise if the element to the right of `midIndex` is equal to greater
        // than or equal to `n`, we know that the item at `midIndex` is the last
        // one that's less than `n`, so we return `midIndex +  1` to get the total
        // number of items that are less than `n`.
        else {
            return {
                result: midIndex + 1,
                ticks
            };
        }
    }
}

function getRunTimeOperations2 (fn, input) {
    const { arr, n } = input;
    const { ticks, result } = fn(arr, n);
    console.log(
        `With input of size ${arr.length}, ${fn.name} ` +
            `clocked ${ticks} ticks to generate result of ${result}.`
    );
}

// getRunTimeOperations2(howManyLessThanNitems, { arr: array1, n: 2 });
// getRunTimeOperations2(howManyLessThanNitems, { arr: array2, n: 9 });
// getRunTimeOperations2(howManyLessThanNitems, { arr: array3, n: 99 });
// getRunTimeOperations2(howManyLessThanNitems, { arr: array4, n: 999 });

/*
 * Linear Time O(n)
 * run times directly porportional to the size (n) of input
 * give an A and a B where B is 2x of A, B will take twice as long
 * linear run times are summing the elements in array or finding min or max val
 */
function findMin (array) {
    let min = array[0];
    let ticks = 1;
}

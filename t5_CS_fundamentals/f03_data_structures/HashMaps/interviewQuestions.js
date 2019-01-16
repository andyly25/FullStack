// this one didn't use the hashmap from previously, so the rest will be
// in hashMap.js file
/*
 * Write an algorithm to check whether any permutation of a string is a palindrome.
 *  A palindrome is a string that reads the same forwards and backwards:
 *  for example, "madam" or "racecar". Your algorithm needs to check if any
 *  permutation of the string is a palindrome. Given the string "acecarr",
 *  the algorithm should return true, because the letters in "acecarr" can be
 *  rearranged to "racecar", which is a palindrome. In contrast, given the word
 *  "north", the algorithm should return false, because there's no way to
 *  rearrange those letters to be a palindrome.
 */

function isPalindrome (string) {
    // here we count letter occurences
    // if there are 2 or more odd letters, then we can't have a palindrome
    const obj = {};
    let odd = 0;
    for (let i = 0; i < string.length; i += 1) {
        const letter = string[i];
        if (obj[letter] === undefined) {
            obj[letter] = 1;
        }
        else {
            obj[letter] += 1;
        }
    }

    for (const key in obj) {
        if (obj[key] % 2 !== 0) {
            odd += 1;
        }
        if (odd > 1) {
            return false;
        }
    }
    return true;
}

const string1 = 'aabbccd';
const string2 = `abccdd`;
console.log(`isPalindrome ${string1}: ${isPalindrome(string1)}`);
console.log(`isPalindrome ${string2}: ${isPalindrome(string2)}`);

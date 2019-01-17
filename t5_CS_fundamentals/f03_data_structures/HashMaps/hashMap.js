class HashMap {
    constructor (initialCapacity = 8) {
        // sets up an array slots which holds all data
        // has a len and capacity. where capacity grows in chunks
        // helps cut down on num of mem allocations
        this.length = 0;
        this._slots = [];
        // wow, had typo on capacity the whole time...
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get (key) {
        const index = this._findSlot(key);
        if (this._slots[index] === undefined) {
            throw new Error('Key error');
        }
        return this._slots[index].value;
    }

    set (key, value) {
        // first checks whether load ratio is greater than given max
        // if so then resisze using resize fn
        // next finds the appropiate slot, and add obj to the array contain k/v
        // O(1) best and avg, O(n) worst
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }

        const index = this._findSlot(key);
        this._slots[index] = {
            key,
            value,
            deleted: false
        };
        this.length += 1;
    }

    // the simplest solution is to not actually delete the item at all, and just
    // put a deleted marker in the slot. Then on resize you can actually clear
    // out all of deleted items. This means that the hash map loads up slightly
    // more quickly, but simplifies the code significantly.
    // addition of a deleted property with some changes to resize and findslot
    remove (key) {
        const index = this._findSlot(key);
        const slot = this._slots[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.deleted = true;
        this.length -= 1;
        this._deleted += 1;
    }

    static _hashString (string) {
        // this takes a string and hashes it, outputting a number
        // uses djb2 algorithm
        let hash = 5381;
        for (let i = 0; i < string.length; i += 1) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }

    _findSlot (key) {
        // used to find correct slot for given key
        // uses _hashstring fn to calc hash of the key and modulos this to fit
        // within current capacity
        // loops thru array, stopping when finds slot matching key
        // slots array will never be full due to max load factor
        // best and avg is O(1), worst case is O(n)
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i = start; i < start + this._capacity; i += 1) {
            const index = i % this._capacity;
            const slot = this._slots[index];
            if (slot === undefined || (slot.key === key && !slot.deleted)) {
                return index;
            }
        }
    }

    _resize (size) {
        // recreate hashmap from scratch with larger capacity
        // we have to call set once for each item so this fn is
        // O(n) best and avg, and O(n^2) worst
        const oldSlots = this._slots;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._slots = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.deleted) {
                this.set(slot.key, slot.value);
            }
        }
    }
}

// MAX_LOAD_RATIO is highest that ratio between len and cap allowed to reach
// when 90% slots reached, a resize takes place
HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

/*
 * 1. Write an algorithm to check whether any permutation of a string is a palindrome.
 *  A palindrome is a string that reads the same forwards and backwards:
 *  for example, "madam" or "racecar". Your algorithm needs to check if any
 *  permutation of the string is a palindrome. Given the string "acecarr",
 *  the algorithm should return true, because the letters in "acecarr" can be
 *  rearranged to "racecar", which is a palindrome. In contrast, given the word
 *  "north", the algorithm should return false, because there's no way to
 *  rearrange those letters to be a palindrome.
 */
function isPalindrome (string) {
    const str = string.toLowerCase();
    const hashMap = new HashMap();
    for (let i = 0; i < str.length; i += 1) {
        console.log(str[i]);
        try {
            // instead of storing we check to see if a letter already exists
            // in the hashmap then we remove it
            hashMap.remove(str[i]);
        }
        catch (e) {
            // if we can't remove, we give a value of 1 to the letter
            hashMap.set(str[i], 1);
        }
    }
    if (hashMap.length <= 1) {
        // as long as there is only 1 or less letter remaining in hashmap
        // we have a palindrome!
        return true;
    }
    return false;
}

const string1 = 'aabbccdde';
const string2 = 'aabbccddef';
// console.log(`is ${string1} a palindrome?: ${isPalindrome(string1)}`);
// console.log(`is ${string2} a palindrome?: ${isPalindrome(string2)}`);

/*
 * 2. Write an algorithm to group a list of words into anagrams.
 * For example, if the input was
 * ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
 * the output should be:
 * [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
 */
const array1 = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
const array2 = ['maps', 'hacker', 'spam', 'pams', 'kercha'];
function anagrams (array) {
    const results = [];
    const hashMap = new HashMap();
    array.forEach((word) => {
        const sortedLetters = word.split('').sort().join('');
        try {
            const index = hashMap.get(sortedLetters);
            results[index].push(word);
        }
        catch (e) {
            hashMap.set(sortedLetters, results.length);
            results.push([word]);
        }
    });
    return results;
}

// console.log(`anagram of ${array1} is
//     ${JSON.stringify(anagrams(array1))}`);
// console.log(`anagram of ${array2} is
//     ${JSON.stringify(anagrams(array2))}`);

/*
 * 3. Write a hash map implementation which uses separate chaining.
 */
class HashTable {
    // default bucket 42
    constructor (size = 42) {
        this.buckets = new Array(size);
        this.size = size;
    }
    // hash function
    hash (key) {
        return key.toString().length % this.size;
    }
    // set function to add new data to hash table
    set (key, value) {
        let index = this.hash(key);
        if (!this.buckets[index]){
            this.buckets[index] = [];
        }
        this.buckets[index].push([key, value]);
        return index;
    }
    // get method: helps get data by using key
    get (key) {
        // index of bucket
        let index = this.hash(key);
        // if there is no bucket
        if (!this.buckets[index]) {
            return null;
        }
        for (let bucket of this.buckets[index]) {
            // if key matches
            if (bucket[0] === key) {
                return bucket[1]
            }
        }
    }
}

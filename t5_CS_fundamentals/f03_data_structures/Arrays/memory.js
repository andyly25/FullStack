// The world's worst allocator, simulates a block of memory
const memory = new Float64Array(1024);
let head = 0;

/*
 * allocate(size) - reserves a contiguous block of memory consisting of
 * size boxes which you can safely modify, returning a pointer to the
 * first box, or null if the allocation fails.
 */
const allocate = function (size) {
    if (head + size > memory.length) {
        return null;
    }
    const start = head;
    head += size;
    return start;
};

// free(ptr) - frees the block of memory reserved using allocate.
const free = function (ptr) {};

/*
 * copy(to, from, size) - copies size boxes of data from the pointer
 * to the to pointer. For example, copy(10, 0, 3) would copy the values at
 * boxes 0, 1 and 2 to the boxes at 10, 11 and 12 respectively.
 */
const copy = function (to, from, size) {
    if (from === to) {
        return;
    } else if (from > to) {
        // Iterate forwards
        for (let i = 0; i < size; i += 1) {
            set(to + i, get(from + i));
        }
    } else {
        // Iterate backwards
        for (let i = size - 1; i >= 0; i -= 1) {
            set(to + i, get(from + i));
        }
    }
};

/*
 * get(ptr) - returns the value stored at a certain memory address
 * (ptr is shorthand for pointer: variables containing memory
 * addresses are known as pointers).
 */
let get = function (ptr) {
    return memory[ptr];
};

/*
 * set(ptr, value) - sets the value stored at a certain memory address.
 */
let set = function (ptr, value) {
    memory[ptr] = value;
};

exports.allocate = allocate;
exports.free = free;
exports.copy = copy;
exports.get = get;
exports.set = set;

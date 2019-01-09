import memory from './memory';

/*
class Array {
    costructor () {
        // array starts with 0 len
        // and ptr to 0 blocks of memory
        this.length = 0;
        this.ptr = 0;
        this.prt = memory.allocate(this.length);
    }

    // push is O(n), increase length and sets single mem address both O(1) op
    push (value) {
        // we need to be able to increase amount of memory reserved
        // for space for new items
        // array is resized
        this._resize(this.length + 1);
        // now you set memory at location to be qual to the value
        // vals in array are always stored in contiguous memory
        memory.set(this.ptr + this.length, value);
        this.length += 1;
    }

    // _resize we have to allocate a new, larger chunk of memory
    // copy any existing existing values from the old to the new chunk
    // then free old chunk
    _resize (size) {
        //  have to copy each item of data to new box each time you resize
        //  the array, so n copies, so run time is O(n)
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
    }
}
*/

// instead of resizing everytime push some data, could allocate more space you
// need. so will resize less often
// we now have a capacity so if it's exceeded we resize by triple the size
// the memory was allocated
class Array {
    constructor () {
        this.length  = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push (value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length += 1;
    }

    _resize (size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get (index) {
        // add an index offset, and get value stored at a mem address
        // both O(1) ops, so retrieving values at any point is O(1)
        if (index < 0 || index >= this.length) {
            throw new Error('Index Error');
        }
        return memory.get(this.ptr + index);
    }

    pop () {
        // rather than resize an array, leave an extra space which will be
        // filled in next push. this is O(1)
        if (this.length === 0) {
            throw new Error('Index Error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length -= 1;
        return value;
    }

    insert (index, value) {
        // to do this need shift all values after new value back 1 position
        // then put new value in correct place
        // best case at O(1), worst case O(n) if at start of array
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length += 1;
    }

    remove (index) {
        // similar to insert except copy valyes backwards to fill space removed
        // value rather than forwards for new value
        // best case is O(1), worst case is O(n)
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length = index - 1);
        this.length -= 1;
    }
}
Array.SIZE_RATIO = 3;

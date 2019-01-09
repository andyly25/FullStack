# Binary and Bitwise operators

## Binary DIgit
- fundamental unit is *bit*, smallest unit of data in comp
- holds 0 or 1 (o usually false, 1 is true)
- in terms of 2^n

### Computer architecture: N-bit processor
- e.g. comp has 32-bit architecture, 4 sets of 8 bit chunks
- 8 bits is called *byte* therefore 32 bit is 4 bytes
- how to read is from right to left farthest right and each placement is 2^n
    - `0101 = 2^2*1 + 2^1*0 + 2^0*1`

### Questions:
1. 2^5 in binary is 0001 0000
2. 2^5 - 1 in binary is: 0000 1111
3. What is the general rule for binary numbers which are of the form 2^n or 2^n - 1?
    - 2^n find the spot for n and everything to right and left of it is 0's
    - 2^n - 1: find placement of n and everything to right is 1's

## Two's Complement
- binary works fine for positive values, so how about negative
- single bit called *sign bit* is reserved to indicate if postive or negative
- to work out 2's complement:
    1. find positive binary form then
    2. invert all current bits of number
    3. add 1 to the number
- e.g. 00000000 00000000 00000010 00000010 -> Binary format of 514
    - 11111111 11111111 11111101 11111101 -> One's complement of 514
    - 11111111 11111111 11111101 11111110 -> Two's complement of 514 (i.e. -514)

## Logical operators:
- `AND (&), OR (|), XOR (^), NOT (~)`
- AND: compares each binary digits if digits are the same 1, else 0
- OR: as long one of the inputs is has a 1, result is a 1, else 0
- XOR: 1 in truth table when both bits are different
- NOT: provides the complement value

## Shift Operators
- `left shift (<<), right shift (>>), zero-fill right shift (>>>)`
- *left shift* will shift the value n num of bits to the left
    - equation of using this is `x*2^y`
    - 13 << 3 will become `13*2^3 = 104`
- *right shift* shift binary bits to the right
    - 13 >> 3 = 1
- *zero-fill right shift* same as right shift, but also discards sign bit value
    - leftmost bits always zero and result is always non-negative
    - -17 >>> 5 = 134217727
    - 00000000 00000000 00000000 00010001  —> Binary Format of 17
    - 11111111 11111111 11111111 11101110  —> One’s Complement of 17 in Binary Format
    - 11111111 11111111 11111111 11101111 —> Two’s Complement of 17 in Binary Format
    - 00000111  11111111 11111111 11111111  —> After shifting 5 bit positions right

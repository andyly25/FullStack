let count = 0;

function recursiveNaive (a, b) {
    if (a === 0) {
        return 0;
    }
    count += 1;
    return b + recursiveNaive(a - 1, b);
}

console.log(`count taken from recursiveNaive(17, 6) = ${recursiveNaive(17, 6)} is: ${count}`);

// Task 1: Without peeking, write your own recursive factorial method

const factorial = (n) => {
    if (n <= 1) {
        return n;
    }

    return n * factorial(n - 1);
}

console.log(factorial(10));

// Task 2: Use your memo function from the previous exercise to memoize your factorial method
const memoize = (cb) => {
    let cache = {};

    return (n) => {
        if (!(n in cache)) {
            cache[n] = cb(n);
        }

        return cache[n];
    }
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(9));

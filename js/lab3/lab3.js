"use strict";

function pow(x, n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / pow(x, -n);
    } else {
        return x * pow(x, n - 1);
    }
}

function sumTo(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}

function factorial(n) {
    if (n === 0) {
        return 1n;
    } else {
        return BigInt(n) * factorial(n - 1);
    }
}

function fib(n) {
    let a = 0n;
    let b = 1n;

    if (n === 0) {
        return a;
    } else if (n === 1) {
        return b;
    } else {
        for (let i = 2; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }

        return b;
    }
}
function compare(x) {
    return function (y) {
        if (y > x) {
            return true;
        } else if (y < x) {
            return false;
        } else {
            return null;
        }
    }
}
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

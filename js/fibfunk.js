"use strict;"
export function fib(n) {
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

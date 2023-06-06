"use strict";
/**
 * 
 * @param {*} x 
 * @param {*} n 
 * @returns 
 */
function pow(x, n) {
    /*return x**n;*/
    if (n==0){ return 1
    } else if (n>0){
    for(let i=1; i<n; i++){
        x*=x
    }
    return x
    }else return 1 / pow(x, -n);
}

function sumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n-1);
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return BigInt(1);
    } else {
        return BigInt(n) * factorial(n - 1);
    }
}

export function fibs(n) {
    let fibArr = [0n, 1n]; //создает массив "fibArr", который представляет собой последовательность Фибоначчи из первых n чисел
    for (let i = 2; i < n; i++) { //вычисляются следующие (n-2) элемента массива, используя формулу последовательности Фибоначчи
        fibArr.push(fibArr[i-1] + fibArr[i-2]);//метод push добавляет значения конец массива
    }
    return fibArr;
}

function compare(x) {
    return function(y) {
        if(y > x) {
            return true;
        } else if(y < x) {
            return false;
        } else {
            return null;
        }
    }
}

function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}

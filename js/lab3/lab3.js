"use strict";
export function getDecimal(num) {
  let w = Math.abs(num - Math.floor(num));
  return parseFloat (w.toFixed(2));
}
export function ucFirst(str) {
  if (!str) {
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}
export function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
export function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}
export function camelize(str) {
  let words = str.split('-');
  for (let i = 1; i < words.length; i++) {
    words[i] = ucFirst(words[i]);
  }
  return words.join('');
}
import { fib } from './fibfunk.js';
export function fibs(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(fib(i));
  }
  return arr;
}
export function arrReverseSorted(arr) {
  let sortedArr = arr.slice().sort((a, b) => b - a);
  return sortedArr;
}
export function unique(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

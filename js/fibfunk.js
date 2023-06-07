"use strict";

import { fib } from './lab2_m.js'

export function fibs(n) {
  let fibArr = [];
  for (let i = 0; i < n; i++) {
    fibArr.push(fib(i));
  }
  return fibArr;
} 

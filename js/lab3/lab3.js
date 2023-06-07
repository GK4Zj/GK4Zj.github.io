"use strict";
/**
 * возвращает дробную часть числа num
 * @param {number} num - возводимое число в степень
 * @return {number} - возвращает дробную часть
 */
export function getDecimal(num) {
  let w = Math.abs(num - Math.floor(num));
  return parseFloat (w.toFixed(2));
}

/**
 * возвращает строку str с заглавным первым символом
 * @param {string} str - входная строка
 * @return {string} - Строка с первой буквой, написанной с заглавной буквы
 */

export function ucFirst(str) {
  if (!str) {
    return str;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

/** 
* возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false
* @param {string} str - Строка для проверки.
* @returns {boolean} - Возвращает true, если строка содержит слова "viagra" или "xxx", иначе - false.
*/

export function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…"
  * @param {string} str - строка, которую нужно обрезать
  * @param {number} maxlength - максимальная длина строки
  * @return {string} - обрезанная строка или исходная строка, если ее длина не превышает максимальную
 */

export function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}

/**
 * преобразует строку вида 'var-test-text' в 'varTestText'
 * @param {string} str - Строка для преобразования
 * @returns {string} - соединяет [var test text] в 'varTestText'
 */

export function camelize(str) {
  let words = str.split('-');
  
  for (let i = 1; i < words.length; i++) {
    words[i] = ucFirst(words[i]);
  }
  
  return words.join('');
}



/**
 * возвращает n-е число Фибоначчи
 * @param {number} n - число Фибоначчи, до которого необходимо всё вычислить
 * @return {array} - Массив, содержащий последовательность Фибоначчи с точностью до n
 */

import { fib } from '/js/fibfunk.js';

/**
 * для натурального n возвращает массив, заполненный числами Фибоначчи до n-го (не включая его)
 * @param {number} n -  число, до которого вычисляется массив из чисел Фибоначчи
 * @returns {array} - массив из чисел Фибоначчи с точностью до заданного числа
 */

export function fibs(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(fib(i));
  }
  return arr;
}

/**
 * принимает неупорядоченный массив чисел arr и возвращает массив из тех же элементов
 * @param {array} arr - Исходный массив.
 * @returns {array} sortedArr - Отсортированный массив.
 */

export function arrReverseSorted(arr) {
  const sortedArr = arr.slice().sort((a, b) => b - a);
  
  return sortedArr;
}

/**
 * вернёт массив уникальных, не повторяющихся значений массива arr
 * @param {array} arr - массив, который нужно обработать
 * @returns {array} - массив с уникальными значениями
 */

export function unique(arr) {
  return Array.from(new Set(arr));
}

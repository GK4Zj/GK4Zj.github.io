"use strict";

/**
 * возвращает дробную часть числа num
 * @param {number} num - возводимое число в степень
 * @return {number} - возвращает дробную часть
 */

  export function getDecimal(num) {
    if (num<0){
        return num - Math.floor(num); //вычитается из num округленное вниз число 
     } else if (num.toString().indexOf(".") !== -1) {    // преобразуем число к строке и проверяем, есть ли в ней точка
             return parseFloat("0." + num.toString().split(".")[1]);  // если есть, то возвращаем дробную часть числа
            } else return 0; // если точки нет, то дробная часть равна 0
 }
  
/**
 * возвращает строку str с заглавным первым символом
 * @param {string} str - входная строка
 * @return {string} - Строка с первой буквой, написанной с заглавной буквы
 */

 export function ucFirst(str){
  if (!str) return str; //если аргумент пустой или его нет, то возвращается без изменений 
  else return str[0].toUpperCase() + str.slice(1); //иначе возвращается строка с замененной первой буквой с помощью метода toUpperCase()
}

/** 
* возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false
* @param {string} str - Строка для проверки.
* @returns {boolean} - Возвращает true, если строка содержит слова "viagra" или "xxx", иначе - false.
*/

 export function checkSpam(str){
    let lowerStr = str.toLowerCase(); //приводим к нижнему регистру 
    return lowerStr.includes("viagra") || lowerStr.includes("xxx"); //проверяем, метод includes() возвращает true или false 
 }

/**
 * проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…"
  * @param {string} str - строка, которую нужно обрезать
  * @param {number} maxlength - максимальная длина строки
  * @return {string} - обрезанная строка или исходная строка, если ее длина не превышает максимальную
 */

export function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + '…'; //обрезает строку str до длины, указанной в переменной maxlength, и добавляет в конец троеточие
    }
    return str;
  }

/**
 * преобразует строку вида 'var-test-text' в 'varTestText'
 * @param {string} str - Строка для преобразования
 * @returns {string} - соединяет [var test text] в 'varTestText'
 */

export function camelize(str){
    return str
    .split("-") // разбивает 'var-test-text' на массив [var test text]
    .map(
      // первый элемент: просто вернуть как есть
      // остальные элементы: сделать первую букву заглавной, для этого используем функцию ucFirst
      (word, index) => index == 0 ? word : ucFirst(word)
    )
    .join(""); // соединяет [var test text] в 'varTestText'
}

/*export function fibs(n){
    let fibArr = [0n, 1n]; //создает массив "fibArr", который представляет собой последовательность Фибоначчи из первых n чисел
    for (let i = 2; i < n; i++) { //вычисляются следующие (n-2) элемента массива, используя формулу последовательности Фибоначчи
      fibArr.push(fibArr[i-1] + fibArr[i-2]);//метод push добавляет значения конец массива 
    }
    return fibArr;
}*/

/**
 * возвращает n-е число Фибоначчи
 * @param {number} n - Число, до которого необходимо вычислить последовательность Фибоначчи
 * @return {array} - Массив, содержащий последовательность Фибоначчи с точностью до n
 */

import { fib } from './lab2_m.js'

/**
 * для натурального n возвращает массив, заполненный числами Фибоначчи до n-го (не включая его)
 * @param {number} n -  число, до которого должен быть вычислен массив чисел Фибоначчи
 * @returns {array} - массив чисел Фибоначчи с точностью до заданного числа
 */

export function fibs(n) {
  let fibArr = [];
  for (let i = 0; i < n; i++) {
    fibArr.push(fib(i));
  }
  return fibArr;
} 

/**
 * принимает неупорядоченный массив чисел arr и возвращает массив из тех же элементов
 * @param {array} arr - Исходный массив.
 * @returns {array} - Отсортированный массив.
 */

export function  arrReverseSorted(arr){
    return arr.slice().sort(function(a, b) { //slice() создает копию исходного массива, метод sort() сортирует новый массив в порядке убывания с помощью функции сравнения
        return b - a;//принимает два аргумента a и b и возвращает результат вычисления b - a. Если результат вычисления отрицательный, то элемент a будет располагаться перед элементом b в массиве
    });
}

/**
 * вернёт массив уникальных, не повторяющихся значений массива arr
 * @param {array} arr - массив, который нужно обработать
 * @returns {array} - массив с уникальными значениями
 */

export function unique (arr){
    return Array.from(new Set(arr)); //Set - это объект, который содержит только уникальные значения любого типа данных, Array.from() - это статический метод массива, который создает новый массив из любого объекта, который похож на массив или итерируемый 
}

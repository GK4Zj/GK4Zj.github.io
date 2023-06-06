"use strict";

export function getDecimal(num) {
    if (num<0){
        return num - Math.floor(num); //вычитается из num округленное вниз число
    } else if (num.toString().indexOf(".") !== -1) { // преобразуем число к строке и проверяем, есть ли в ней точка
        return parseFloat("0." + num.toString().split(".")[1]); // если есть, то возвращаем дробную часть числа
    } else return 0; // если точки нет, то дробная часть равна 0
}

export function ucFirst(str){
    if (!str) return str; //если аргумент пустой или его нет, то возвращается без изменений
    else return str[0].toUpperCase() + str.slice(1); //иначе возвращается строка с замененной первой буквой с помощью метода toUpperCase()
}

export function checkSpam(str){
    let lowerStr = str.toLowerCase(); //приводим к нижнему регистру
    return lowerStr.includes("viagra") || lowerStr.includes("xxx"); //проверяем, метод includes() возвращает true или false
}

export function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…'; //обрезает строку str до длины, указанной в переменной maxlength, и добавляет в конец троеточие
    }
    return str;
}

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

export function arrReverseSorted(arr){
    return arr.slice().sort(function(a, b) { //slice() создает копию исходного массива, метод sort() сортирует новый массив в порядке убывания с помощью функции сравнения
        return b - a;//принимает два аргумента a и b и возвращает результат вычисления b - a. Если результат вычисления отрицательный, то элемент a будет располагаться перед элементом b в массиве
    });
}

export function unique (arr){
    return Array.from(new Set(arr)); //Set - это объект, который содержит только уникальные значения любого типа данных, Array.from() - это статический метод массива, который создает новый массив из любого объекта, который похож на массив или итерируемый
}

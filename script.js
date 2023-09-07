// Задание 1 Написать функцию, которая принимает два параметра и складывает их. Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.

// Примеры результатов вызова функции:

// sum(2,4); // 6

// sum('d',4); // введенные данные не являются числами

// sum(1, [2]); // введенные данные не являются числами

// sum(1); // введите два параметра

// sum(); // введите два параметра

let sum = (a, b) => {
    if(a === undefined && b === undefined){
        console.error('введите два параметра');

    } else if (a === undefined || b === undefined){
        console.error('введите два параметра')

    } else if (typeof a !== 'number' || typeof b !== 'number'){
        console.error('введенные данные не являются числами')
    }else{console.log(a + b)}   

}

sum(2,4); // 6

sum('d',4); // введенные данные не являются числами

sum(1, [2]); // введенные данные не являются числами

sum(1); // введите два параметра

sum(); // введите два параметра


// Задание 3 Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом. Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...” Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета. Написать функцию в стрелочном синтаксисе.


let guessNumber = (a) => {
     if(a <= 0 || 11 <= a) return ('введите введите число от 1 до 10');

    else if(a == getRandomInteger(1, 10)) return ('Вы выйграли');
 
    else return (`Вы не угадали, ваше число - ${a}, а выпало число ${getRandomInteger(1, 10)}`);
}

let getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

console.log(guessNumber(1))
console.log(guessNumber(2))
console.log(guessNumber(3))
console.log(guessNumber(4))
console.log(guessNumber(5))
console.log(guessNumber(6))
console.log(guessNumber(7))
console.log(guessNumber(8))
console.log(guessNumber(9))
console.log(guessNumber(10))
   // Почему при одинаковых значениях не всегда выпадает "Вы выйграли"?


//    Задание 4 Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

const arr = ['Brok', 'Sed', 'Mila', 'Bill'];


const newArr = arr.map(arr => arr);

console.log(newArr)


// Задание 5 Напишите функцию, которая принимает массив имен и возвращает новый массив, в котором каждое имя будет иметь приставку "Hello, "

const arr = ['Brok', 'Sed', 'Mila', 'Bill'];


const newArr = arr.map(arr => 'Hello, ' + arr);

console.log(newArr)



// Задание 6 Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив, содержащий только их имена.


const users = [{name: 'Vasya'}, {name: 'Olya'}, {name: 'Anna'}, {name: 'Alex'}, {name: 'Valery'}];
const newUsers = [];

users.forEach(item => {
   newUsers.push(item.name);
})
   
console.log(newUsers)


// Задание 7 Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

const objectWithNumbers = {
   a: 10,
   b: 20,
   c: 'string',
   d: 12,
}  




const sumObjectValues = objectWithNumbers => {
   let sum = 0;
         for(let key in objectWithNumbers)
      if(typeof objectWithNumbers[key] === 'number'){
            sum += objectWithNumbers[key];
         }
         return sum;
      }


   console.log(sumObjectValues(objectWithNumbers));
      
      



// Задание 8 Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Вам понадобятся методы строк.


let str = 'вот и лето прошло';

ucFirst = str => {
   if (!str) return str;
 
   return str[0].toUpperCase() + str.slice(1);
 }

 console.log(ucFirst(str))


// Задание 9 Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

 let checkSpam = str => {
   let badWord = 'badWord';
   let xxx = 'XXX';
   if(str.toLowerCase().includes(badWord.toLowerCase()) || str.toLowerCase().includes(xxx.toLowerCase())){
      return true;
   } else{
      return false;
   }}
 console.log(checkSpam('shdfj'))


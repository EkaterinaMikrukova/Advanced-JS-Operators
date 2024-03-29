/**
 * ? Расширение массива с помощью Spread оператора
 */

const numbers = [2, 3, 4];
const moreNumbers = [1, ...numbers, 5];

console.log(moreNumbers); // [1, 2, 3, 4, 5]

// Более сложный пример с использованием Spread оператора
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const array3 = [5, 6, 7];
const num =  4;

// Массив уникальных значений
const combinedArray = [...new Set([...array1, num, ...array2, ...array3])];
/* ... - Spread оператор можно использовать с любым итерируемым объектом, 
например Set, Map, String
*/

console.log(combinedArray); // [1, 2, 3, 4, 5, 6, 7]

// Пример использования в проекте Todolist
// ../packages/todolist/controllers/storage-controller.js#L41

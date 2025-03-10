function findMinMax(arr) {
    if (arr.length === 0) return null;

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return { min, max };
}

const numbers = [5, 3, 8, 1, 3, 2];
const result = findMinMax(numbers);
console.log("Мінімальне:", result.min);
console.log("Максимальне:", result.max);



function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Перевіряємо, чи однакова кількість ключів
    if (keys1.length !== keys2.length) return false;

    // Перевіряємо відповідність кожної властивості
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}

const objA = { name: "Alice", age: 25 };
const objB = { name: "Alice", age: 25 };
const objC = { name: "Bob", age: 30 };

console.log("Об'єкти A і B однакові:", compareObjects(objA, objB)); // true
console.log("Об'єкти A і C однакові:", compareObjects(objA, objC)); // false
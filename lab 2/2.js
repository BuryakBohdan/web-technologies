// Функція для перевірки, чи число знаходиться в певному діапазоні
function isInRange(number, min, max) {
    return number >= min && number <= max;
}

console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(15, 1, 10)); // false

// Використання логічного оператора NOT для зміни стану змінної
let isActive = true;
console.log("Початковий стан:", isActive);

isActive = !isActive;
console.log("Змінений стан:", isActive);

isActive = !isActive;
console.log("Повернення до початкового стану:", isActive);
//1

let sum = 0;
let i = 1;

while (i <= 50) {
    sum += i;
    i++;
}

console.log("Сума перших 50 натуральних чисел: " + sum);

//2

const number = prompt("Введіть число для обчислення факторіала: ");
let factorial = 1;

if (number < 0) {
    console.log("Факторіал для від'ємних чисел не визначений.");
} else {
    for (let i = 1; i <= number; factorial *= i, i++);
    console.log(`Факторіал числа ${number} дорівнює ${factorial}.`);
}

//3

const number1 = Number(prompt("Введіть число від 1 до 12: "));

switch (number1) {
    case 1:
        console.log("Січень");
        break;
    case 2:
        console.log("Лютий");
        break;
    case 3:
        console.log("Березень");
        break;
    case 4:
        console.log("Квітень");
        break;
    case 5:
        console.log("Травень");
        break;
    case 6:
        console.log("Червень");
        break;
    case 7:
        console.log("Липень");
        break;
    case 8:
        console.log("Серпень");
        break;
    case 9:
        console.log("Вересень");
        break;
    case 10:
        console.log("Жовтень");
        break;
    case 11:
        console.log("Листопад");
        break;
    case 12:
        console.log("Грудень");
        break;
    default:
        console.log("Некоректне число. Введіть число від 1 до 12.");
}

//4

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

// Приклад використання
const numbers = [1, 2, 34, 4, 5, 6, 7, 8, 9, 100];
console.log("Сума парних чисел:", sumEvenNumbers(numbers));

//5

const countVowels = str => {
    const vowels = "аеєиіїоуюяAEЄИІЇОУЮЯaeiouAEIOU";
    return [...str].filter(char => vowels.includes(char)).length;
};

// Приклад використання
const input = "Привіт, як справи?";
console.log("Кількість голосних:", countVowels(input));

//6

function power(base, exponent) {
    return base ** exponent;
}

// Приклад використання
console.log("Результат:", power(2, 3)); // 2^3 = 8

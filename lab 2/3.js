// Функція для перетворення оцінки на словесний формат
function getGradeDescription(grade) {
    return grade === 5 ? "Відмінно" :
        grade === 4 ? "Добре" :
            grade === 3 ? "Задовільно" :
                grade === 2 ? "Незадовільно" :
                    "Некоректна оцінка";
}

// Функція для визначення сезону за номером місяця
function getSeason(month) {
    return (month === 12 || month === 1 || month === 2) ? "Зима" :
        (month >= 3 && month <= 5) ? "Весна" :
            (month >= 6 && month <= 8) ? "Літо" :
                (month >= 9 && month <= 11) ? "Осінь" :
                    "Некоректний номер місяця";
}

// Приклади використання
console.log(getGradeDescription(5));
console.log(getGradeDescription(2));
console.log(getSeason(7));
console.log(getSeason(11));
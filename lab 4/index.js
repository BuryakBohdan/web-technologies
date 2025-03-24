//1
console.log("Task 1");

// Створюємо масив фруктів
let fruits = ["яблуко", "банан", "вишня", "груша", "апельсин"];
console.log("Початковий масив:", fruits);

// 1. Видаляємо останній елемент з масиву та виводимо оновлений масив у консоль
fruits.pop();
console.log("Масив після видалення останнього елемента:", fruits);

// 2. Додаємо новий елемент "ананас" на початок масиву
fruits.unshift("ананас");
console.log("Масив після додавання ананаса на початок:", fruits);

// 3. Сортуємо масив у зворотньому алфавітному порядку та виводимо результат у консоль
fruits.sort().reverse();
console.log("Масив у зворотньому алфавітному порядку:", fruits);

// 4. Знаходимо індекс елемента "яблуко" у масиві
let appleIndex = fruits.indexOf("яблуко");
console.log("Індекс елемента 'яблуко':", appleIndex);

//2
console.log();
console.log("Task 2");

// 1. Створюємо масив рядків з назвами кольорів
let colors = ["червоний", "синій", "жовтий", "зелений", "темно-синій", "блакитний", "фіолетовий"];
console.log("Початковий масив кольорів:", colors);

// 2. Знаходимо найдовший і найкоротший елементи у масиві
let longest = colors.reduce((a, b) => a.length >= b.length ? a : b);
let shortest = colors.reduce((a, b) => a.length <= b.length ? a : b);
console.log("Найдовший елемент:", longest);
console.log("Найкоротший елемент:", shortest);

// 3. Видаляємо з масиву всі рядки, крім тих, що містять слово "синій"
colors = colors.filter(color => color.includes("синій"));
console.log("Масив після фільтрації (залишили тільки ті, що містять 'синій'):", colors);

// 4. Застосовуємо метод join() для об’єднання елементів у рядок з комами
let result = colors.join(", ");
console.log("Результуючий рядок:", result);


//3
console.log();
console.log("Task 3");

// 1. Створюємо масив об’єктів з даними про працівників
let employees = [
    { имя: "Олександр", вік: 28, посада: "розробник" },
    { имя: "Марія", вік: 32, посада: "дизайнер" },
    { имя: "Іван", вік: 25, посада: "розробник" },
    { имя: "Катерина", вік: 40, посада: "менеджер" },
    { имя: "Дмитро", вік: 35, посада: "тестувальник" }
];
console.log("Початковий масив працівників:", employees);

// 2. Відсортуємо масив за алфавітом за іменами працівників
employees.sort((a, b) => a.имя.localeCompare(b.имя));
console.log("Масив після сортування за іменами:", employees);

// 3. Знаходимо всіх працівників, які мають посаду "розробник"
let developers = employees.filter(employee => employee.посада === "розробник");
console.log("Список розробників:", developers);

// 4. Видаляємо працівника за умовою (наприклад, вік більше 30)
employees = employees.filter(employee => employee.вік <= 30);
console.log("Масив після видалення працівників віком більше 30:", employees);

// 5. Додаємо нового працівника до масиву
employees.push({ имя: "Богдан", вік: 22, посада: "стажер" });
console.log("Масив після додавання нового працівника:", employees);

//4
console.log();
console.log("Task 4");

// Масив студентів
let students = [
    { name: "Олексій", age: 20, course: 2 },
    { name: "Анна", age: 22, course: 3 },
    { name: "Микола", age: 19, course: 1 }
];

// Видаляємо студента Олексія
students = students.filter(s => s.name !== "Олексій");
console.log("Видалено Олексія:", students);

// Додаємо нового студента
students.push({ name: "Тарас", age: 21, course: 2 });
console.log("Додано нового студента:", students);

// Сортуємо студентів за віком у спадному порядку
students.sort((a, b) => b.age - a.age);
console.log("Відсортовані за віком:", students);

// Знаходимо студента 3-го курсу
console.log("Студент 3-го курсу:", students.find(s => s.course === 3));


//5
console.log();
console.log("Task 5");

// Масив чисел
let numbers = [1, 2, 3, 4, 5];

// Виводимо квадрати чисел
console.log("Квадрати чисел:", numbers.map(n => n ** 2));

// Виводимо парні числа
console.log("Парні числа:", numbers.filter(n => n % 2 === 0));

// Обчислюємо суму чисел
console.log("Сума чисел:", numbers.reduce((sum, n) => sum + n, 0));

// Додаємо нові числа до масиву
numbers = [...numbers, 6, 7, 8, 9, 10];
console.log("Розширений масив:", numbers);
// Видаляємо перші 3 елементи
numbers.splice(0, 3);
console.log("Після видалення перших 3 елементів:", numbers);


//6
console.log();
console.log("Task 6");

function libraryManagement() {
    // 1. Створення початкового масиву об’єктів книг
    let books = [
        { title: "Війна і мир", author: "Лев Толстой", genre: "Роман", pages: 1225, isAvailable: true },
        { title: "Гаррі Поттер", author: "Дж. К. Ролінг", genre: "Фентезі", pages: 500, isAvailable: false },
        { title: "1984", author: "Джордж Орвелл", genre: "Антиутопія", pages: 328, isAvailable: true },
        { title: "Майстер і Маргарита", author: "Михайло Булгаков", genre: "Роман", pages: 480, isAvailable: true }
    ];

    // 2. Додавання нової книги до бібліотеки
    function addBook(title, author, genre, pages) {
        books.push({ title, author, genre, pages, isAvailable: true });
        console.log(`Книга "${title}" додана до бібліотеки.`);
    }

    // 3. Видалення книги з бібліотеки за назвою
    function removeBook(title) {
        const initialLength = books.length;
        books = books.filter(book => book.title !== title);
        if (books.length < initialLength) {
            console.log(`Книга "${title}" видалена з бібліотеки.`);
        } else {
            console.log(`Книга "${title}" не знайдена.`);
        }
    }

    // 4. Пошук книги за автором
    function findBooksByAuthor(author) {
        const foundBooks = books.filter(book => book.author === author);
        console.log(`Книги автора "${author}":`, foundBooks);
        return foundBooks;
    }

    // 5. Позначення книги як взятої чи повернутої
    function toggleBookAvailability(title, isBorrowed) {
        const book = books.find(book => book.title === title);
        if (book) {
            book.isAvailable = !isBorrowed;
            console.log(`Книга "${title}" тепер ${book.isAvailable ? "доступна" : "взята"}.`);
        } else {
            console.log(`Книга "${title}" не знайдена.`);
        }
    }

    // 6. Сортування книг за кількістю сторінок
    function sortBooksByPages() {
        books.sort((a, b) => a.pages - b.pages);
        console.log("Книги відсортовані за кількістю сторінок:", books);
    }

    // 7. Зведення статистики про книги
    function getBooksStatistics() {
        const totalBooks = books.length;
        const availableBooks = books.filter(book => book.isAvailable).length;
        const borrowedBooks = totalBooks - availableBooks;
        const averagePages = books.reduce((sum, book) => sum + book.pages, 0) / totalBooks;

        const statistics = {
            totalBooks,
            availableBooks,
            borrowedBooks,
            averagePages: Math.round(averagePages)
        };

        console.log("Статистика бібліотеки:", statistics);
        return statistics;
    }

    return {
        addBook,
        removeBook,
        findBooksByAuthor,
        toggleBookAvailability,
        sortBooksByPages,
        getBooksStatistics
    };
}

// Створюємо об'єкт керування бібліотекою
const library = libraryManagement();

// Тестування функцій
library.addBook("Аліса в Країні Див", "Льюїс Керролл", "Фентезі", 200);
library.removeBook("1984");
library.findBooksByAuthor("Дж. К. Ролінг");
library.toggleBookAvailability("Гаррі Поттер", true);
library.sortBooksByPages();
library.getBooksStatistics();


//7
console.log();
console.log("Task 7");

// 1. Створення об’єкта студента
let student = {
    имя: "Богдан",
    вік: 18,
    курс: 2
};
console.log("Початковий об’єкт студента:", student);

// 2. Додавання нової властивості з переліком предметів
student.sub = ["Математика", "Програмування", "Фізика", "Англійська мова"];
console.log("Об’єкт після додавання предметів:", student);

// 3. Видалення властивості "вік"
delete student.age;
console.log("Об’єкт після видалення віку:", student);

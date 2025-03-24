function task1() {
    // Отримуємо введення від користувача та створюємо масив фруктів
    let input = prompt("Введіть фрукти через кому (наприклад, яблуко, банан, вишня, груша):");
    let fruits = input.split(",").map(fruit => fruit.trim());
    console.log("1.0 Початковий масив фруктів:", fruits);

    // Видаляємо останній елемент масиву
    let removedFruit = fruits.pop();
    console.log(`1.1 Видалено останній елемент ("${removedFruit}"), новий масив:`, fruits);

    // Додаємо ананас на початок масиву
    fruits.unshift("ананас");
    console.log("1.2 Додано ананас на початок масиву:", fruits);

    // Сортуємо масив у зворотному порядку
    fruits.sort().reverse();
    console.log("1.3 Відсортований у зворотному порядку масив:", fruits);

    // Знаходимо індекс яблука у масиві
    let appleIndex = fruits.indexOf("яблуко");
    console.log("1.4 Індекс 'яблуко' у масиві:", appleIndex !== -1 ? appleIndex : "Не знайдено");
}

function task2() {
    // Отримуємо введення від користувача та створюємо масив кольорів
    let input = prompt("Введіть назви кольорів через кому(наприклад: синій, червоний, чорний, зелений):");
    let colors = input.split(",").map(color => color.trim());

    // Знаходимо найдовший і найкоротший колір
    let longest = colors.reduce((a, b) => (a.length > b.length ? a : b));
    let shortest = colors.reduce((a, b) => (a.length < b.length ? a : b));
    console.log("2.1 Найдовший колір:", longest);
    console.log("2.2 Найкоротший колір:", shortest);

    // Фільтруємо кольори, які містять "синій"
    let filteredColors = colors.filter(color => color.includes("синій"));
    console.log("2.3 Фільтровані кольори:", filteredColors);

    // Об'єднуємо відфільтровані кольори в рядок
    console.log("2.4 Об'єднаний рядок кольорів:", filteredColors.join(", "));
}

function task3() {
    // Масив працівників
    let employees = [
        { name: "Іван", age: 30, position: "розробник" },
        { name: "Марія", age: 25, position: "дизайнер" },
        { name: "Олег", age: 35, position: "розробник" }
    ];

    // Сортуємо працівників за іменем
    employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log("3.1 Відсортовані працівники:", employees);

    // Фільтруємо розробників
    console.log("3.2 Розробники:", employees.filter(e => e.position === "розробник"));

    // Видаляємо працівників старше 35 років
    employees = employees.filter(e => e.age < 35);
    console.log("3.3 Видалений працівник (старший 35 років):", employees);

    // Додаємо нового працівника
    employees.push({ name: "Оксана", age: 28, position: "тестувальник" });
    console.log("3.4 Додано працівника:", employees);
}

function task4() {
    // Масив студентів
    let students = [
        { name: "Олексій", age: 20, course: 2 },
        { name: "Анна", age: 22, course: 3 },
        { name: "Микола", age: 19, course: 1 }
    ];

    // Видаляємо студента Олексія
    students = students.filter(s => s.name !== "Олексій");
    console.log("4.1 Видалено Олексія:", students);

    // Додаємо нового студента
    students.push({ name: "Тарас", age: 21, course: 2 });
    console.log("4.2 Додано нового студента:", students);

    // Сортуємо студентів за віком у спадному порядку
    students.sort((a, b) => b.age - a.age);
    console.log("4.3 Відсортовані за віком:", students);

    // Знаходимо студента 3-го курсу
    console.log("4.4 Студент 3-го курсу:", students.find(s => s.course === 3));
}

function task5() {
    // Масив чисел
    let numbers = [1, 2, 3, 4, 5];

    // Виводимо квадрати чисел
    console.log("5.1 Квадрати чисел:", numbers.map(n => n ** 2));

    // Виводимо парні числа
    console.log("5.2 Парні числа:", numbers.filter(n => n % 2 === 0));

    // Обчислюємо суму чисел
    console.log("5.3 Сума чисел:", numbers.reduce((sum, n) => sum + n, 0));

    // Додаємо нові числа до масиву
    numbers = [...numbers, 6, 7, 8, 9, 10];
    console.log("5.4 Розширений масив:", numbers);// Видаляємо перші 3 елементи
    numbers.splice(0, 3);
    console.log("5.5 Після видалення перших 3 елементів:", numbers);
}
function libraryManagement() {
    let books = [
        { title: "Майстер і Маргарита", author: "Михайло Булгаков", genre: "Роман", pages: 480, isAvailable: true },
        { title: "1984", author: "Джордж Орвелл", genre: "Антиутопія", pages: 328, isAvailable: false },
        { title: "Тарас Бульба", author: "Микола Гоголь", genre: "Пригоди", pages: 224, isAvailable: true }
    ];

    return {
        addBook(title, author, genre, pages) {
            books.push({ title, author, genre, pages, isAvailable: true });
        },

        removeBook(title) {
            books = books.filter(book => book.title !== title);
        },

        findBooksByAuthor(author) {
            return books.filter(book => book.author === author);
        },

        toggleBookAvailability(title, isBorrowed) {
            let book = books.find(book => book.title === title);
            if (book) book.isAvailable = !isBorrowed;
        },

        sortBooksByPages() {
            books.sort((a, b) => a.pages - b.pages);
        },

        getBooksStatistics() {
            let totalBooks = books.length;
            let availableBooks = books.filter(book => book.isAvailable).length;
            let borrowedBooks = totalBooks - availableBooks;
            let avgPages = totalBooks ? books.reduce((sum, book) => sum + book.pages, 0) / totalBooks : 0;

            return { totalBooks, availableBooks, borrowedBooks, avgPages };
        },

        getBooks() {
            return books;
        }
    };
}

function task6() {
    const library = libraryManagement();

    library.addBook("Гаррі Поттер", "Джоан Роулінг", "Фентезі", 410);
    console.log("Додана книга:", library.getBooks());

    library.removeBook("1984");
    console.log("Після видалення книги:", library.getBooks());

    console.log("Книги Булгакова:", library.findBooksByAuthor("Михайло Булгаков"));

    library.toggleBookAvailability("Гаррі Поттер", true);
    console.log("Після зміни доступності книги:", library.getBooks());

    library.sortBooksByPages();
    console.log("Відсортовані книги:", library.getBooks());

    console.log("Статистика бібліотеки:", library.getBooksStatistics());
}

task6();

function task7() {
    // Створюємо об'єкт студента
    let student = { name: "Андрій", age: 21, course: 3 };

    // Додаємо список предметів
    student.subjects = ["Математика", "Фізика", "Програмування"];

    // Видаляємо вік
    delete student.age;
    console.log("7. Оновлений студент:", student);
}

function start() {
    let choice;
    do {
        choice = prompt("Введіть номер завдання (1-7) або 'exit' для виходу:");
        switch (choice) {
            case "1": task1(); break;
            case "2": task2(); break;
            case "3": task3(); break;
            case "4": task4(); break;
            case "5": task5(); break;
            case "6": task6(); break;
            case "7": task7(); break;
            case "exit":
                console.log("Вихід з програми.");
                break;
            default:
                console.log("Некоректний вибір. Спробуйте ще раз.");
        }
    } while (choice !== "exit");
}

start();
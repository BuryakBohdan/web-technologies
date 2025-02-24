alert("Bohdan Buriak, 243-2")

// Отримуємо елемент заголовка
const title = document.querySelector("#title");

//Button
const button = document.querySelector("#changeText");

// Додаємо обробник подій для зміни тексту
button.addEventListener("click", function() {
    title.textContent = "Hello world!";
});

function double_click() {
    document.getElementById("click1").innerHTML = "Hello World";
}
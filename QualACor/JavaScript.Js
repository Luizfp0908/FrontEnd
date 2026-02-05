const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e"];

const btn = document.getElementById("btn");
const color = document.querySelector("span-color");

console.log(btn, color);

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();

    const mainColor = document.getElementById("main-color");
    mainColor.style.backgroundColor = colors[randomColor];
});

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}
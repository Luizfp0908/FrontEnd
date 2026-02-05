const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector("span-color");

btn.addEventListener("click", function () {
    
    let hexaColor = "#";

    for (let i = 0; i < 6; i++) {
        hexaColor += hexa[getRandomNumber]
    let randomColor = getRandomColor();

    const mainColor = document.getElementById("main-color");
    mainColor.style.backgroundColor = colors[randomColor];
});

function getRandomNumber() {
    return Math.floor(Math.random() * hexa.length);
}


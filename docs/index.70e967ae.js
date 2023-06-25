"use strict";
let number = generateNumber();
let score = 50;
let highScore = 0;
const colors = {
    white: "#fff",
    success: "#b6f897",
    danger: "#fb5353"
};
// elements
const { body } = document;
const numberElement = document.querySelector(".number");
const numberField = document.querySelector("[name=number]");
const checkButton = document.querySelector(".button-check");
const message = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const againButton = document.querySelector(".button-again");
function checkNumber() {
    const value = Number(numberField.value);
    if (!value) updateTextContent(message, "\uD83D\uDEAB Enter a number...");
    else if (value === number) {
        updateTextContent(numberElement, value);
        updateTextContent(message, "\uD83C\uDFC6 Correct number!");
        if (score > highScore) {
            highScore = score;
            updateTextContent(highScoreElement, highScore);
        }
        disableElement(checkButton);
        disableElement(numberField);
        setCssProperty(body, "backgroundColor", colors.success);
        setCssProperty(numberElement, "width", "25rem");
    } else {
        score--;
        updateTextContent(scoreElement, score);
        if (score) updateTextContent(message, value > number ? "↗️ Too high" : "↘️ Too low");
        else {
            updateTextContent(message, "\uD83E\uDD37‍ You lost the game ...");
            disableElement(checkButton);
            disableElement(numberField);
            setCssProperty(body, "backgroundColor", colors.danger);
        }
    }
}
function resetGame() {
    number = generateNumber();
    score = 50;
    updateTextContent(numberElement, "?");
    numberField.value = "";
    updateTextContent(message, "\uD83E\uDD14 Start guessing...");
    updateTextContent(scoreElement, score);
    disableElement(checkButton, false);
    disableElement(numberField, false);
    setCssProperty(body, "backgroundColor", colors.white);
    setCssProperty(numberElement, "width", "15rem");
}
// event listeners
checkButton.addEventListener("click", checkNumber);
againButton.addEventListener("click", resetGame);
// helper functions
function generateNumber() {
    return Math.trunc(Math.random() * 50) + 1;
}
function updateTextContent(element, value) {
    element.textContent = value;
}
function disableElement(element, value = true) {
    element.disabled = value;
}
function setCssProperty(element, property, value) {
    element.style[property] = value;
}

//# sourceMappingURL=index.70e967ae.js.map

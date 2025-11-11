import {WORDS} from "./consts.js";

const gameDiv= document.getElementById("game")

const createPlaceHolderHTML = () => {
    const word = sessionStorage.getItem('word')
    let placeholderHTML = ''
    for (let i = 0; i < word.length; i++) {
        placeholderHTML = placeholderHTML + `<h1 id="letter_${i}" class="letter">_</h1>`
    }

    return `<div id="placeholders" class="placeholders-wrapper">${placeholderHTML}</div>`
}

export const startGame = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    const wordToGuess = WORDS[randomIndex]
    sessionStorage.setItem("word", wordToGuess);

    let placeholderHTML = ''
    for (let i = 0; i < wordToGuess.length; i++) {
        placeholderHTML = placeholderHTML + `<h1 id="letter_${i}" class="letter">_</h1>`
    }

    gameDiv.innerHTML = createPlaceHolderHTML()
}
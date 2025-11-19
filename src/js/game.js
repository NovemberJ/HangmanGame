import {WORDS, KEYBOARD_LETTERS} from "./consts.js";

const gameDiv= document.getElementById("game")

const createPlaceHolderHTML = () => {
    const word = sessionStorage.getItem('word');
    const wordArray = Array.from(word);
    const placeholdersHTML = wordArray.reduce((acc, curr, i) => acc + `<h1 id="letter_${i}"
    class="letter">_</h1>`, '')
    return `<div id="placeholders" class="placeholders-wrapper">${placeholdersHTML}</div>`
}

const createKeyboard = () => {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard')
    keyboard.id = 'keyboard'

    const keyboardHTML = KEYBOARD_LETTERS.reduce((acc, curr) => {
        return acc + `<button class="button-primary" id="${curr}">${curr}</button>`
    }, '')

    keyboard.innerHTML = keyboardHTML;
    return keyboard
}

export const startGame = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    const wordToGuess = WORDS[randomIndex]
    sessionStorage.setItem("word", wordToGuess);

    gameDiv.innerHTML = createPlaceHolderHTML()
    const keyboardDiv = createKeyboard()
    gameDiv.appendChild(keyboardDiv)
}
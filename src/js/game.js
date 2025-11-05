import {WORDS} from "./consts.js";

export const startGame = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    const wordToGuess = WORDS[randomIndex]
    sessionStorage.setItem("word", wordToGuess);

}
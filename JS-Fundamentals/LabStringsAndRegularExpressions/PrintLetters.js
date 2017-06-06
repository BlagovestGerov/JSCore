function printLetters(text) {

    for(let letter in text){

        console.log(`str[${letter}] -> ${text[letter]}`);
    }
}

printLetters('Hello, world')
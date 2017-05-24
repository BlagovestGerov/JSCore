function LetterOccurrences(input, letter) {
    let count = 0;
    for(let i=0; i<=input.length; i++) {
        if (input[i] == letter) count++;
    }
    console.log(count);
}
LetterOccurrences('hello', 'l');

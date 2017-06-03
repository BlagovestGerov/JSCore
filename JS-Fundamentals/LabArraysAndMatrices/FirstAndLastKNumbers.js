function firstAndLastKNumbers(arr) {
    let k = arr.shift();

    console.log(arr.slice(0, k).join(' '));
    // взимаме последните к елемента с (-к)
    console.log(arr.slice(-k).join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9])
function SmallestTwoNumbers(arr) {
    let result = arr.sort((a, b) => a - b);
    console.log(`${result[0]} ${result[1]}`);
}

SmallestTwoNumbers([1,2, 3, 4, 100, 5, 6])

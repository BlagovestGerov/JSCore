function result(input) {
    return Math.max.apply(null, input.map(Number));
}

console.log(result([10, 20, 5]))

function BiggestNumber([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let biggest = Math.max(Math.max(a, b), c);

    console.log(biggest);
}

BiggestNumber([5, -2, 7])

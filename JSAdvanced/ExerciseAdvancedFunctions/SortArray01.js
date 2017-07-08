function solve(itrms, sortOrder) {
    let sorting =
    {
        asc: Array.apply(null, itrms.sort((a, b) => a-b)),
        desc: Array.apply(null, itrms.sort((a, b) => b-a))
    };

    return sorting[sortOrder];
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));

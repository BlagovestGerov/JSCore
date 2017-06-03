function diagonalSums(matrix) {



    let mainSum = 0;
    let secondarySum = 0;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (r === c) {
                mainSum += matrix[r][c];
            }
            if (c === matrix[r].length - r - 1) {
                secondarySum += matrix[r][c];
            }
        }
    }

    return mainSum + " " + secondarySum;

}

console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));
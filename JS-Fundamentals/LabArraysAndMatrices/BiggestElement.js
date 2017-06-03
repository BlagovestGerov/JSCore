function  biggestElement(matrix) {
    let biggest = Number.NEGATIVE_INFINITY;


   /* for (let row = 0; row < matrix.length; row++){
        for ( let cow = 0; cow < matrix[row].length; cow++){
            let number = matrix[row][cow];
            if(number > biggest){
                biggest = number;
            }
        }
    }*/
   matrix.forEach(row =>
        row.forEach(e => {
        if (e > biggest){
            biggest = e;
          }
        })
    );
    return biggest;

   // console.log(Math.max.apply(null, matrix.reduce((row1, row2) => row1.concat(row2))));
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]],
    [[3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]]));
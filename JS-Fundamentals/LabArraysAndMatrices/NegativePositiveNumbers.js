function negativePositiveNumbers(arr) {
    let result= [];

    for (let num of arr) {
        if(num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result)
}

 negativePositiveNumbers([7, -2, 8, 9]);
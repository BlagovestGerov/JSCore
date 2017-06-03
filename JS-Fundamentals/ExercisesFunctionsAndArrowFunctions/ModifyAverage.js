function modifyAverage(number) {
    function getAverage(number) {
        let sum = 0;
        let digits = number.toString()
        for(let digit of digits) {
            sum += Number(digit);
        }

        return sum / digits.length;
    }

    let average = getAverage(number);

    let addNine = x => x + "9";

    while(average <= 5) {
        number = addNine(number);
        average = getAverage(number);
    }

    console.log(number);
}

modifyAverage("101");

function EvenPositionElements(arr) {

    // функционално на един ред
    // console.log(arr.filter((e,i) => i %2==0).join(' ');
    let result = [];
    for (let i=0; i<arr.length; i++) {

        if (i%2 == 0) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '))
}

EvenPositionElements([1, 2, 3, 4, 5,]);

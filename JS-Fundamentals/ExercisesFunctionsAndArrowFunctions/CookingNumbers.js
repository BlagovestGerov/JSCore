function  CookingByNumbers(input) {
    let start = Number(input[0]);

    function operations(operation) {
        switch (operation){
            case 'chop': return start/2;
            case 'dice': return Math.sqrt(start);
            case 'spice': return ++start;
            case 'bake': return start*3;
            case 'fillet': return start-(start*0.2);
        }
    }

    for (let i = 1; i <= 5; i++) {
        start = operations(input[i])
        console.log(start);
    }

}

CookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);

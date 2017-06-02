function RectangleOfStars(count = 5) {
    for (let i = 0; i < count; i++){
        printStars();

    }

    function printStars(n = count){
        console.log("*" + " *".repeat(n-1));
    }
}
RectangleOfStars(1)
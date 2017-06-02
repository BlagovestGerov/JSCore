function TriangleOfStars(count) {
    for (let i = 1; i <= count; i++) {
            printStars(i);
    }
    for (let j = count-1; j>=1; j--){
        printStars(j);
    }
    function printStars(n){
        console.log("*".repeat(n));
    }
}
TriangleOfStars(3);
function IsPrime(num) {
    let prime = true;

    let max = Math.sqrt(num);

    for ( let div = 2; div <= max; div++) {
        if (num % div == 0) {
            prime = false;
            break;
        }
    }
    return prime && (num >1);
}

console.log(IsPrime(4))

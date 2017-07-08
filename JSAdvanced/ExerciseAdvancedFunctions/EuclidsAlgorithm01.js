function gcd(a, b) {
    if(b == 0){
        return a;
    }
    else{
        let reminder = a%b;
        return gcd(b, reminder);
    }
}

console.log(gcd(252, 105));
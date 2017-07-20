// judge 0 scores

function solve() {
    let f1 = 0;
    let f2 = 1;

    return function fib() {
        let f3 = f1 + f2;

        //destructuring
        [f1, f2] = [f2, f3];
        //f1 = f2;
        //f2 = f3;

        console.log(f1);
    }
}


let fib = solve();

fib();
fib();
fib();

let anotherFFib = solve();
anotherFFib();
fib();


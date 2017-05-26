function solve(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let z1 = Number(arr[2]);
    let x2 = Number(arr[3]);
    let y2 = Number(arr[4]);
    let z2 = Number(arr[5]);

    let distance = Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)
        +Math.pow((z2-z1), 2));
    console.log(distance);
}

solve(['1', '1', '0', '5', '4', '0'])
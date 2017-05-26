function solve(arr) {
    let speedA = Number(arr[0]);
    let speedB = Number(arr[1]);
    let time = Number(arr[2])/3600;

    console.log(Math.abs((speedA*time)-(speedB*time))*1000);
}

solve(['5', '-5', '40'])

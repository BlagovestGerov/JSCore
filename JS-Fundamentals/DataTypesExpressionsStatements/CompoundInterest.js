function solve(arr) {
    let principalSum = Number(arr[0]);
    let interestRate = Number(arr[1]);
    let compoundingPeriod = Number(arr[2]);
    let timespan = Number(arr[3]);

    let F = principalSum * Math.pow(1+interestRate/(100*(12/compoundingPeriod)), 12/compoundingPeriod*timespan);

    console.log(F.toFixed(2));
}

solve(['1500', '4.3', '3', '6']);
function solve(input){

    let stepN = Number(input.pop());

    input.filter((element, index) => index%stepN == 0).forEach(element => console.log(element));

}
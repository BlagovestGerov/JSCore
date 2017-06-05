function solve(input){

    let number = 1;
    let result = [];

    for (let command of input){
        if(command == 'add'){
            result.push(number);

        }else if(command == 'remove'){
            result.pop();
        }
        number++;
    }



    if(result.length == 0) {
        console.log('Empty');
    }else{
        result.forEach(element => console.log(element));
    }

}

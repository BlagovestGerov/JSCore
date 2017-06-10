function solve(string, firstString){

    let stratsWithSubstr = true;
    if(string.substring(0, firstString.length) != firstString){
        stratsWithSubstr = false
    }
    console.log(stratsWithSubstr);


}

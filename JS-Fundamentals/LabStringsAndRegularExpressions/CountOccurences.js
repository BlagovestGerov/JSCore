function  countOccurences(str, text) {
    let count = 0;

    let index = text.indexOf(str);
    while(index != -1){

        index++;
        count++;
        index = text.indexOf(str, index);
    }

    return count;
}


console.log(countOccurences('haha', 'hahaha'));
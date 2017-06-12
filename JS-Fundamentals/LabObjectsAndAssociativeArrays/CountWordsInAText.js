function  CountWordsInAText([text]) {

    let textSplited = text.split(/\W+/g).filter(w => w != '');
    let obj = {};
    for (let word of textSplited){
        if(!obj.hasOwnProperty(word)){
            obj[word] = 1;
        }else{
            obj[word] +=1;
        }
    }
    console.log(JSON.stringify(obj))

}


CountWordsInAText(['Far too slow, you\'re far too slow.']);
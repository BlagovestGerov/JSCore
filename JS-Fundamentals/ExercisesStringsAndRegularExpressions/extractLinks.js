function extractLinks(input) {
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;

    for(let sentence of input){
        let match = null;
        let index = 0;
        while(match = regex.exec(sentence)){
            console.log(match[0]);
        }
    }

}

extractLinks(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']);

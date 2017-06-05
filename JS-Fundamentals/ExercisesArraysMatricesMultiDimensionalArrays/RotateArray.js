function rotateArray(arr) {
    let rotateCount = Number(arr.pop());
    rotateCount %= arr.length;
    for(let i = 0; i < rotateCount; i++){
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }
    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
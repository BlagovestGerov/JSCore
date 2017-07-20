let array = [3,4, 6, 2, 3, 645, 2, 3, 6, 83, 23, 13];

function binary_search(arr, value) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;

    while(low <= high){
        mid = Math.floor((high + low)/2);
        //middle == value being searched
        if(arr[mid] == value){
            //return value
            return arr[mid];
        }else if(value > arr[mid]){
            //move the low up one
            low = mid + 1;
        }else {
            //move the high down one
            high = mid - 1;
        }
    }
    return -1;
}

let sorted = array.sort(function (a, b) {
    return a - b
});

console.log(sorted);
let wasitFound = binary_search(sorted, 83);
console.log(wasitFound);

function captureTheNumbers(arr) {

    let pattern = /\d+/g;
    let text = arr.join(' ');
    let numbers = text.match(pattern);
    console.log(numbers.join(' '));
}
captureTheNumbers(['The300' +
'What is that?' +
'I think it’s the 3rd movie.' +
'Lets watch it at 22:45']);
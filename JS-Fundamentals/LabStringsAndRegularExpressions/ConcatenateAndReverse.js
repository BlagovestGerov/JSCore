function ConcatAndReverse(text) {

    let allStrings = text.join('');
    let reverseText = Array.from(allStrings).reverse();
    console.log(reverseText.join(''));
}

ConcatAndReverse(['I', 'ám', 'student']);

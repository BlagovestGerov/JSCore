function palindrome(input) {

    for (let i = 0; i < input.length; i++){
        if(input[i] != input[input.length - i - 1] ) {
            return false;
        }
    }
    return true;

}
palindrome("aabbaa")

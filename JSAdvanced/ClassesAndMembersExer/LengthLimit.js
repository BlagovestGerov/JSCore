/*Create a class, Stringer, which holds single string and a length property. The class should be initialized with a

 string, and an initial length. The class should always keep the initial state of its given string.

 Name the two properties innerString and innerLength.

 There should also be functionality for increasing and decreasing the initial length property.

 Implement function increase(length) and decrease(length), which manipulate the length property with the

 given value.

 The length property is a numeric value and should not fall below 0. It should not throw any errors, but if an attempt

 to decrease it below 0 is done, it should be automatically set to 0.

 You should also implement functionality for toString() function, which returns the string, the object was

 initialized with. If the length of the string is greater than the length property, the string should be cut to from right

 to left, so that it has the same length as the length property, and you should add 3 dots after it, if such truncation

 was done.

 If the length property is 0, just return 3 dots.*/

class String{

    constructor(str, len){
        this.innerString = str;
        this.innerLength = len;
    }

    set innerLength(value){
        if(value < 0){
            this._innerLength = 0;
        }else {
            this._innerLength = value;
        }
    }

    get innerLength(){
        return this._innerLength;
    }

    increase(value){
        this.innerLength += value;
    };

    decrease(value){
        this.innerLength -=value;
    };

    toString(){
        if(this.innerString.length< this.innerLength){
            return this.innerString;
        }else if(this.innerString.length === this.innerLength){
            return this.innerString.substring(0, this._innerLength);
        }else {
            return this.innerString.substring(0, this._innerLength)+'...';
        }
    };
}


let test = new String("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
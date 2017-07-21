/*Write a JS class for a rectangle object. It needs to have a width (Number), height (Number) and color (String)

 properties, which are set from the constructor and a calcArea() method, that calculates and returns the

 rectangle’s area.

 Input

 The constructor function will receive valid parameters.

 Output

 The calcArea() method should return a number.

 Submit the class definition as is, without wrapping it in any function.*/

class Reactangle{

    //function, but dont use the key word
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this. color = color;
    }

    calcArea(){
        return this.width* this.height;
    }
}

let rect = new Reactangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
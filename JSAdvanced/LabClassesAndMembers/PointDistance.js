/*Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the

 constructor, and a static method for finding the distance between two points, called distance().

 Input

 The distance() method should receive two Point objects as parameters.

 Output

 The distance() method should return a number, the distance between the two point parameters.

 Submit the class definition as is, without wrapping it in any function.

 Examples

 Sample Input Output

 let p1 = new Point(5, 5);

 let p2 = new Point(9, 8);

 console.log(Point.distance(p1, p2)); 5*/

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    // class property, not an instance property
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Number(Math.sqrt(dx*dx*dy*dy).toFixed(2));
    }
}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

let p3 = new Point(5, 5);
let p4 = new Point(10, 10);
console.log(Point.distance(p3, p4));

let p5 = new Point(5, 0);
let p6 = new Point(10, 0);
console.log(Point.distance(p5, p6));
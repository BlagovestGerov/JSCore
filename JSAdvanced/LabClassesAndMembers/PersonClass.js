/*Write a JS class that represents a personal record. It has the following properties, all set from the constructor:

  firstName

  lastName

  age

  email

 And a method toString(), which prints a summary of the information. See the example for formatting details.

 Input

 The constructor function will receive valid parameters.

 Output

 The toString()method should return a string.

 Submit the class definition as is, without wrapping it in any function.*/

class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email}`;

    }
}

let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(''+person);
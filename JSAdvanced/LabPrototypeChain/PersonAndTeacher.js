/*Write a JS class Person and a class Teacher which extends Person. A Person should have a name and an email.

 A Teacher should have a name, an email, and a subject.

 Input

 There will be no input.

 Output

 Your function should return an object containing the classes Person and Teacher.

 Example

 template.js

 function personAndTeacher() {

 //TODO

 return {

 Person,

 Teacher

 }

 }

 2. Inheriting and Replacing*/

function result() {
    class Person{
        constructor(name, email){
            this.name =name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            //call the   constructor of the parrent class
            super(name, email);
            // initialize other stuff
            this.subject =subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

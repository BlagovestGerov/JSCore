/*Extend the Person and Teacher from the previous task and add a class Student inheriting from Person. Add

 toString() functions to all classes, the formats should be as follows:

  Person - returns &quot;Person (name: {name}, email: {email})&quot;

  Student - returns &quot;Student (name: {name}, email: {email}, course: {course})&quot;

  Teacher - returns &quot;Teacher (name: {name}, email:{email}, subject:{subject})&quot;

 Try to reuse code by using the toString function of the base class.

 Input

 There will be no input.

 Output

 Your function should return an object containing the classes Person, Teacher and Student.

 Example

 template.js

 function toStringExtension() {

 //TODO*/

function result() {
    class Person{
        constructor(name, email){
            this.name =name;
            this.email = email;
        }
        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }

    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            //call the   constructor of the parrent class
            super(name, email);
            // initialize other stuff
            this.subject = subject;
        }

        toString() {
            let base = super.toString();
            return base.substring(0, (base.length - 1)) + `, subject: ${this.subject})`;
        }

    }

    class Student extends Person{
        constructor(name, email, course){
            //call the constructor of the parrent class
            super(name, email);
            //initialize other stuff
            this.course = course;
        }

        toString(){
            let base = super.toString();
            return base. substring(0, (base.length-1) + `, course: ${this.course}`);
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let teacher = new Teacher('name','email','subject');
console.log(''+teacher);

let student = new Student('name','email','Biology');
console.log(''+student);
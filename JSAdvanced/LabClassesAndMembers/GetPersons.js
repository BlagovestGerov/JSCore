/*Write a JS function that returns an array of Person objects. Use the class from the previous task, create the following

 instances, and return them in an array:

 For any empty cells, do not supply a parameter (call the constructor with less parameters).

 Input / Output

 There will be no input, the data is static and matches the table above. As output, return an array with Person

 instances.

 Submit a function that returns the required output.*/



function getPeople() {
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

    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'),
    ]
}

console.log(getPeople().join('\n'));

/*Rats are uniting.

 Create a class, Rat, which holds the functionality to unite with other objects of the same type. Make it so that the

 object holds all of the other objects it has connected to.

 The class should have a name, which is a string, and it should be initialized with it.

 The class should also hold a function unite(otherRat), which unites the first object with the given one. An

 object should store all of the objects it has united to. The function should only add the object if it is an object of the

 class Rat. In any other case it should do nothing.

 The class should also hold a function getRats() which returns all the rats it has united to, in a list.

 Implement functionality for toString() function… which returns a string representation of the object and all of

 the objects its united with, each on a new line. On the first line put the object’s name and on the next several lines

 put the united objects’ names, each with a padding of “##”.*/

class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat){
        if(otherRat instanceof Rat){
            this.unitedRats.push(otherRat);
        }
    };

    getRats(){
        return this.unitedRats;
    };

    toSpring(){
        let result = this.name;

        for(let rat of this.unitedRats){
            result += `\n## ${rat.name}`;
        }

        return result;
    };
}

let test = new Rat("Pesho");
console.log(test);
console.log(test.toString());

console.log(test.getRats());

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());

console.log(test.toSpring());
/*Write a JS program that receives a worker object as a parameter and modifies its properties. Workers have the

 following structure:

 { weight: Number,

 experience: Number,

 bloodAlcoholLevel: Number,

 handsShaking: Boolean }

 Weight is expressed in kilograms, experience in years and bloodAlcoholLevel is in milliliters. If you receive a worker

 who’s handsShaking property is set to true it means he needs to intake some alcohol in order to be able to work

 correctly. The required amount is 0.1ml per kilogram per year of experience. The required amount must be added

 to the existing amount. Once the alcohol is administered, change the handsShaking property to false.

 Workers whose hands aren’t shaking should not be modified in any way. Return them as they were.

 Input

 Your function will receive a valid object as parameter.

 Output

 Return the same object that was passed in, modified as necessary.*/


let worker1 = {
    weight: 12,
    experience: 23,
    bloodAlcoholLevel: 43,
    handsShaking: true
};

function modifyWorker(worker) {

    if(worker.handsShaking === true){
        worker.bloodAlcoholLevel += worker.experience * worker.weight * 0.1;
        worker.handsShaking = false;
    }

    return worker;
}

console.log(modifyWorker(worker1));



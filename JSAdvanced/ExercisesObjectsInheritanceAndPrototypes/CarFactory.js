/*Write a JS program that assembles a car by given requirements out of existing components. The client will place an

 order in the form of an object describing the car. You need to determine which parts to use to fulfil the client’s

 order. You have the following parts in storage:

 An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are

 numbers. When selecting an engine, pick the smallest possible that still meets the requirements.

 © Software University Foundation (softuni.org). This work is licensed under the CC-BY- NC-SA license.

 Follow us: Page 8 of 8

 Small engine: { power: 90, volume: 1800 }

 Normal engine: { power: 120, volume: 2400 }

 Monster engine: { power: 200, volume: 3500 }

 A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can

 paint it any color.

 Hatchback: { type: &#39;hatchback&#39;, color: &lt;as required&gt; }

 Coupe: { type: &#39;coupe&#39;, color: &lt;as required&gt; }

 The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in

 inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number.

 Input

 You will receive an object as an argument to your function. The format will be as follows:

 { model: &lt;model name&gt;,

 power: &lt;minimum power&gt;,

 color: &lt;color&gt;,

 carriage: &lt;carriage type&gt;,

 wheelsize: &lt;size&gt; }

 Output

 Return the resulting car object as a result of your function. See the examples for details.*/

function assembleCar(wantedCar) {
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}];
    let carriages = [{type: 'hatchback', color: wantedCar.color}, {type: 'coupe', color: wantedCar.color}];
    let wheelsize = wantedCar.wheelsize%2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;

    return {
        model: wantedCar.model,
        engine: engines.filter(e => e.power >= wantedCar.power)[0],
        carriage: carriages.filter(c => c.type == wantedCar.carriage)[0],
        wheel: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

assembleCar(
    {   model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14 });

assembleCar(
    {   model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 });


assembleCar(
    {   model: 'Ferrari',
        power: 200,
        color: 'red',
        carriage: 'coupe',
        wheelsize: 21});

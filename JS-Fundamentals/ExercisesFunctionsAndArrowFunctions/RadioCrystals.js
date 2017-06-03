function  radioCrystals(numArr) {
    let targerSize = numArr[0];
    let opStr = 'Cut';

    for (let i=1; i <numArr.length; i++){
        let microns = numArr[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(microns, 'Cut', cut);
        microns = executeOperation(microns, 'Lap', lap);
        microns = executeOperation(microns, 'Grind', grind);
        microns = executeOperation(microns, 'Etch', etch);

        if(microns + 1 === targerSize){
            microns = xRay(microns);
        }
      console.log(`Finished crystal ${microns} microns`);
    }

    function cut(crystal) {
        return crystal/4;
    }

    function lap(crystal) {
        crystal -= crystal * 0.2;
        return crystal;
    }

    function grind(crystal) {
        crystal -=20;
        return crystal;
    }

    function etch(crystal) {
        crystal -=2;
        return crystal;
    }

    function xRay(crystal) {
        console.log('X-ray x1');
        return ++crystal;
    }

    function transportAndWash(crystal) {
        console.log('Transporting and washing');
        return Math.floor(crystal);
    }

    function executeOperation(microns, opStr, op) {
        let newSize = op(microns);
        let counter = 0;
        while (newSize >= targerSize ||
            Math.floor(targerSize - newSize) === 1) {
            microns = newSize;
            newSize = op(microns);
            counter++;
        }

        if(counter > 0){
            console.log(`${opStr} x${counter}`);
            microns = transportAndWash(microns);
        }

        return microns;
    }
}

radioCrystals([1000, 4000, 8100])
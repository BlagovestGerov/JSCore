function populationInTown(input) {
    let map = new Map;

    for (let element of input){
        let tokens = element.split(/\s+<->\s+/);
        let town = tokens[0];
        let population = Number(tokens[1]);

        if(!map.has(town)){
            map.set(town, 0)
        }
            map.set(town, map.get(town)+population)

    }
        for(let entry of map){
            console.log(`${entry[0]} : ${entry[1]}`)
        }

}


populationInTown(['Sofia <-> 1200000',
'Montana <-> 20000'])

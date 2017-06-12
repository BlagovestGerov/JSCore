function townsToJSON(towns) {

    let townsArray = [];
    for (let town of towns.slice(1)) {
        let [empty, townName, lat, lngt] =
            town.split(/\s*\|\s*/);

        let townobj = {Town: townName, Latitude: Number(lat), Longitude: Number(lngt)};
    townsArray.push(townobj)
    }
    console.log(JSON.stringify(townsArray));
}
townsToJSON(['|Town|Lat|Lng|', '|Sofia |42|23|'])


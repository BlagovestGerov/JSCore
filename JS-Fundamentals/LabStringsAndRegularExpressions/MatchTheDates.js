function matchTheDates(text) {
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let result = regex.exec(text);

        while(result !== null){
            let [date, day ,month, year] = result;
            console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
        result = regex.exec(text);
        }
}

matchTheDates("I am born on 30-Dec-1994.This is not date: 512-Jan-1996.My father is born on the 29-Jul-1955.")
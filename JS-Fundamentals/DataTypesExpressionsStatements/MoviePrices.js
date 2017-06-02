
function moviePrices([title, day]) {
    title = title.toLowerCase();
    day = day.toLowerCase();

    let priceList1 = [12, 10, 15, 12.50, 15, 25, 30];
    let priceList2 = [8.50, 8.50, 8.50, 8.50, 8.50, 15, 15];
    let priceList3 = [8, 8, 8, 8, 8, 10, 10];
    let priceList4 = [10, 10, 10, 10, 10, 15, 15];
    let price = 0;

    switch(title){
        case 'the godfather':
            price = priceList1; break;
        case 'schindler\'s list':
            price = priceList2; break;
        case 'casablanca':
            price = priceList3; break;
        case 'the wizard of oz':
            price = priceList4; break;
        default: price[0,1,2,3,4,5,6] = 'error';
    };
    let prices = {};
    prices.monday = price[0];
    prices.tuesday = price[1];
    prices.wednesday = price[2];
    prices.thursday = price[3];
    prices.friday = price[4];
    prices.saturday = price[5];
    prices.sunday = price[6];

    if(prices[day]){
        return prices[day];
    }return 'error';
};

console.log(moviePrices(["The Godfather", "wednesday"]));
=======
function moviePrice([title, day]) {

	title = title.toLowerCase();
	day = day.toLowerCase();



	if(title == 'the godfather'){
		switch (day) {
			case "monday": return 12;
			case "tuesday": return 10;
			case "wednesday": return 15;
			case "thursday": return 12.50;
			case "friday": return 15;
			case "saturday": return 25;
			case "sunday": return 30;
			default: return "error"
		}
	}else if(title == 'schindler\'s list'){
		switch (day) {
			case "monday": return 8.50;
			case "tuesday": return 8.50;
			case "wednesday": return 8.50;
			case "thursday": return 8.50;
			case "friday": return 8.50;
			case "saturday": return 15;
			case "sunday": return 15;
			default: return "error"
		}
	}else if(title == 'casablanca'){
		switch (day) {
			case "monday": return 8;
			case "tuesday": return 8;
			case "wednesday": return 8;
			case "thursday": return 8;
			case "friday": return 8;
			case "saturday": return 10;
			case "sunday": return 10;
			default: return "error"
		}
	}else if(title == 'the wizard of oz'){
		switch (day) {
			case "monday": return 10;
			case "tuesday": return 10;
			case "wednesday": return 10;
			case "thursday": return 10;
			case "friday": return 10;
			case "saturday": return 15;
			case "sunday": return 15;
			default: return "error"
		}
	}

}


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
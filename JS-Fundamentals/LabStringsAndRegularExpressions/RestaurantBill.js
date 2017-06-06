function restaurantBill(arr) {

    let product = arr.filter((e, i) => i%2 == 0);
    let prices = arr.filter((e, i) => i%2 == 1).map(Number);


    console.log(`You purchased ${product.join(', ')} for a total sum of ${prices.reduce((a, b) => a + b)}`);

}

restaurantBill(['Coca', '1.5', 'Pancaces', '2.88'])
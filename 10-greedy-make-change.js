// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25

const makeChange = (amount) => {
    let coins = 0;

    [25, 10, 5].forEach(coinValue => {
        if (amount >= coinValue) {
            let numCoins = Math.floor(amount / coinValue);
            coins += numCoins;
            amount -= numCoins * coinValue;
        }
    });

    return coins;
}



// input amount: 40 , output # of coins: 3 (25, 10, 5)
console.log(makeChange(40));

// input amount: 35, output # of coins: 2 (25, 10) 
console.log(makeChange(35));
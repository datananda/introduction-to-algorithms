const cache = {};
const coins = [10, 6, 1];

const makeChange = (amount) => {
    if (cache[amount]) {
        return cache[amount];
    }

    if (amount === 0) {
        return 0;
    }

    let minCoins;

    coins.forEach(coin => {
        if (amount >= coin) {
            let currMinCoins = makeChange(amount - coin);

            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });

    cache[amount] = minCoins + 1;
    return cache[amount];
}

console.log(makeChange(12));
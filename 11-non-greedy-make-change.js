const makeChange = (coinsArr, amount) => {
    if (amount < 1) {
        return 0;
    }
    
    let minCoins = -1;

    coinsArr.forEach(coinVal => {
        if (amount >= coinVal) {
            let currMinCoins = makeChange(coinsArr, amount - coinVal);

            if (minCoins === -1 || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });

    return minCoins + 1;
}

console.log(makeChange([1,6,10], 12));

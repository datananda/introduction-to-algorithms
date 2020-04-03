const bubbleSort = (arr) => {
    let arrLeft = arr.length - 1;

    while (arrLeft > 1) {
        for (let i = 0; i < arrLeft; i++) {
            let current = arr[i];
            let next = arr[i + 1];
            
            if (current > next) {
                arr[i] = next;
                arr[i + 1] = current;
            }
        }
        
        arrLeft--;
    }

    return arr;
}

console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));

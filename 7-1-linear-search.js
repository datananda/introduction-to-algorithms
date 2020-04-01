// TASK: Implement linear search.

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1;
} 

console.log(linearSearch([2,6,7,90,103], 16));
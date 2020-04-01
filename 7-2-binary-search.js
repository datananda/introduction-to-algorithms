// TASK: Implement binary search.

function binarySearch(arr, val) {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex !== endIndex) {
        let middleIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;

        if (val > arr[middleIndex]) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex;
        }
    }

    if (val === arr[startIndex]) {
        return startIndex;
    } else {
        return -1;
    }
} 

console.log(binarySearch([2,6,7,90,103], 90));

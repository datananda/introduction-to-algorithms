const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let sorted = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            sorted.push(right.splice(0, 1)[0]);
        } else {
            sorted.push(left.splice(0, 1)[0]);
        }
    }

    return [...sorted, ...left, ...right];
}

console.log(mergeSort([5,1,9,16,11,2]));


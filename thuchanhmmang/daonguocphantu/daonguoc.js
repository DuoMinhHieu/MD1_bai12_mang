function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
let myArray = [-3, 5, 1, 3, 2, 10];
let reversedArray = reverseArray(myArray);
console.log(reversedArray);
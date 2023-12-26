let arr = [2, 5, 12, 8, 15, 7, 10, 3, 18, 6];
let maxVal = arr[0];
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
        maxVal = arr[i];
        maxIndex = i;
    }
}
console.log("Giá trị lớn nhất trong mảng là: " + maxVal);
console.log("Vị trí của giá trị lớn nhất trong mảng là: " + maxIndex);
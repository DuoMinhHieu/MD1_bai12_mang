let arr = [8, 12, 5, 19, 3, 14, 7, 22, 10, 15];
let maxVal = Math.max.apply(null, arr);
let sum = arr.reduce(function (acc, currentVal) {
    return acc + currentVal;
}, 0);
let average = sum / arr.length;
console.log("Giá trị lớn nhất trong mảng là: " + maxVal);
console.log("Giá trị trung bình của các phần tử trong mảng là: " + average);
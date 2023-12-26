let arr = [2, 5, 12, 8, 15, 7, 10, 3, 18, 6];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}
console.log("Số lượng số nguyên lớn hơn hoặc bằng 10 là: " + count);
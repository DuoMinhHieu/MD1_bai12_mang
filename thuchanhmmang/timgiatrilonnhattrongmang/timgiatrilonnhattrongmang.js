let mang = [10, 5, 8, 3, 20];
let giaTriLonNhat = mang[0];
for (let i = 1; i < mang.length; i++) {
    if (mang[i] > giaTriLonNhat) {
        giaTriLonNhat = mang[i];
    }
}
console.log("Giá trị lớn nhất trong mảng là: " + giaTriLonNhat);
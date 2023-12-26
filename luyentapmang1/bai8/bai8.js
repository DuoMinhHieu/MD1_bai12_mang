let arr = [];
for (let i = 0; i < 10; i++) {
    let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    arr.push(element);
}
arr.sort(function(a, b) {
    return b - a;
});
console.log("Mảng sau khi sắp xếp giảm dần:", arr);
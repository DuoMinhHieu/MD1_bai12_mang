let arr = [];
for (let i = 0; i < 10; i++) {
    let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    arr.push(element);
}
let V = parseInt(prompt("Nhập giá trị số nguyên V:"));
let index = arr.indexOf(V);
if (index !== -1) {
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    console.log(`${V} đã được xoá khỏi mảng.`);
} else {
    console.log(`${V} không thuộc mảng.`);
}
console.log("Mảng sau khi thay đổi:", arr);
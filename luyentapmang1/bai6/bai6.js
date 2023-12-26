let arr = [];
for (let i = 0; i < 10; i++) {
    let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    arr.push(element);
}
let V = parseInt(prompt("Nhập giá trị số nguyên V:"));
if (arr.includes(V)) {
    console.log(`${V} nằm trong mảng.`);
} else {
    console.log(`${V} không nằm trong mảng.`);
}
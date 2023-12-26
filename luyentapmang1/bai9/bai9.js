let a = [1,3,5,7,9,11,13,15,17,19];
for (let i = 0; i < 10; i++) {
    let elementA = parseInt(prompt(`Nhập phần tử a thứ ${i + 1}:`));
    a.push(elementA);
}
let b = [2,4,6,8,10,12,14,16,18,20];
for (let i = 0; i < 10; i++) {
    let elementB = parseInt(prompt(`Nhập phần tử b thứ ${i + 1}:`));
    b.push(elementB);
}
let c = new Array(20);
for (let i = 0; i < 10; i++) {
    c[i] = a[i];
    c[i + 10] = b[i];
}
console.log("Mảng c sau khi nối từ a và b:", c);
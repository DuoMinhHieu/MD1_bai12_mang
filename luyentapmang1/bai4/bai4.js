let arr = [];
for (let i = 0; i < 5; i++) {
    let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    arr.push(element);
}
console.log("Mảng trước khi đảo ngược:", arr);

let reversedArr = arr.reverse();
console.log("Mảng sau khi đảo ngược:", reversedArr);
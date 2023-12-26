// function demSoNguyenAmTrongChuoi(chuoi) {
//     let mangKyTu = chuoi.split('');
//     let soNguyenAm = mangKyTu.reduce(function (tong, kyTu) {
//         if (/[0-9-]/.test(kyTu)) {
//             return tong + 1;
//         } else {
//             return tong;
//         }
//     }, 0);
//     return soNguyenAm;
// }
// let chuoiTest = "Hello, -123 World! -456";
// let ketQua = demSoNguyenAmTrongChuoi(chuoiTest);
// console.log(`Số nguyên âm trong chuỗi là: ${ketQua}`);

function demSoKyTuSoTrongMang(mangKyTu) {
    let kyTuSo = mangKyTu.filter(function (kyTu) {
        return isNaN(kyTu);
    });
    return kyTuSo.length;
}
let mangKyTu = ['a', '1', 'b', '2', 'c', '3', 'd'];
let ketQua = demSoKyTuSoTrongMang(mangKyTu);
console.log(`Số ký tự số trong mảng là: ${ketQua}`);
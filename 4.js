function sumOfDiagonals(mtrx) {
  let jumlahDiagonal_kesatu = 0;
  let jumlahDiagonal_kedua = 0;
  let jumlah_diagonal = 0;
  for (let i = 0; i < mtrx.length; i++) {
    jumlahDiagonal_kesatu += mtrx[i][i];
    jumlahDiagonal_kedua += mtrx[i][mtrx.length - i - 1];
    jumlah_diagonal += jumlahDiagonal_kesatu - jumlahDiagonal_kedua;
  }
  console.log(
    `maka hasilnya adalah ${jumlahDiagonal_kesatu} - ${jumlahDiagonal_kedua} = ${jumlah_diagonal}`
  );
}
sumOfDiagonals([
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
]);

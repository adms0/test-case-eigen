function findLongestWord(str) {
  let tempStr = '';
  const spltStr = str.split(' ');
  for (let i = 0; i < spltStr.length; i++) {
    if (spltStr[i].length > tempStr.length) {
      tempStr = spltStr[i];
    }
  }
  return `${tempStr}: ${tempStr.length} character`;
}

console.log(findLongestWord('Saya sangat senang mengerjakan soal algoritma'));
console.log('=====================================');

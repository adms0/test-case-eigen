function reverseOnlyAlphabetics(str) {
  return str.replace(/[a-zA-Z]+/gm, (e) => {
    return e.split('').reverse().join('');
  });
}

console.log(reverseOnlyAlphabetics('NEGIE1'));
console.log(reverseOnlyAlphabetics('2AMTIROGLA'));
console.log(reverseOnlyAlphabetics('SyxalaGgnusmaS21'));

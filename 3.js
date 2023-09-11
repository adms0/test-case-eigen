function countSameElementArr(arr1, arr2) {
  const result = {};
  arr2.forEach(function (e) {
    result[e] = arr1.filter((t) => t == e).length;
  });
  return Object.values(result);
}
console.log(
  countSameElementArr(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz'])
);
console.log(' ');
console.log(
  countSameElementArr(
    ['a', 'b', 'b', 'b', 'a', 'c', 'b', 'c', 'c'],
    ['a', 'b', 'c', 'd']
  )
);

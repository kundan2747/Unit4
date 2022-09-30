function sumOfOdd(arr) {
  var oddArr = arr.filter(function (ele) {
    return ele % 2 != 0;
  });
  var ans = oddArr.reduce(function (acc, ele) {
    return acc + ele;
  });
  console.log(ans);
}
var arr = [1, 2, 3, 4];
sumOfOdd(arr);
